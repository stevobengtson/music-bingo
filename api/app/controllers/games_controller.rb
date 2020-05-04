class GamesController < ApplicationController
  before_action :set_game, only: [:show, :update, :destroy, :card, :play_list]
  before_action :set_game_key, only: [:show_key]

  # GET /games
  def index
    paginate json: Game.all, per_page: params[:limit], page: params[:page]
  end

  # GET /games/1
  def show
    render json: @game
  end

  def show_key
    render json: @game
  end

  # POST /games
  def create
    @game = Game.new(game_params)

    if @game.save
      render json: @game, status: :created, location: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /games/1
  def update
    if @game.update(game_params)
      render json: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # DELETE /games/1
  def destroy
    @game.destroy
  end

  # GET /games/1/card
  def card
    card_generator = CardGenerator.new
    render json: card_generator.generate(@game)
  end

  # GET /games/1/play_list
  def play_list
    list = PlayList.new
    render json: list.randomize(@game)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    def set_game_key
      @game = Game.includes(category: :clips).where(key: params[:key]).first or not_found
    end

    # Only allow a trusted parameter "white list" through.
    def game_params
      params.require(:game).permit(:key, :category_id, :name)
    end

    def not_found
      raise ActionController::RoutingError.new('Not Found')
    end
end
