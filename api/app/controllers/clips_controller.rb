class ClipsController < ApplicationController
  before_action :set_clip, only: [:show, :update, :destroy]
  before_action :set_category, only: [:create]

  # GET /clips
  def index
    paginate json: clips_in_catetegory_by_name(params[:category_id]), per_page: params[:limit], page: params[:page]
  end

  # GET /clips/1
  def show
    render json: @clip
  end

  # POST /clips
  def create
    @clip = Clip.new(clip_params)
    @clip.categories << @category

    if @clip.save
      render json: @clip, status: :created, location: @clip
    else
      render json: @clip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clips/1
  def update
    if @clip.update(clip_params)
      render json: @clip
    else
      render json: @clip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clips/1
  def destroy
    @clip.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_clip
      @clip = Clip.find(params[:id])
    end

    def set_category
      @category = Category.find(params[:category_id])
    end

    # Only allow a trusted parameter "white list" through.
    def clip_params
      params.require(:clip).permit(:name, :artist, :start, :length, :location)
    end

    def clips_in_catetegory_by_name(category_id)
      Clip.joins(:categories).where(categories: { id: category_id }).order(:name)
    end
end
