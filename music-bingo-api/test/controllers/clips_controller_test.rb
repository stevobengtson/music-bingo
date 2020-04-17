require 'test_helper'

class ClipsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @clip = clips(:one)
  end

  test "should get index" do
    get clips_url, as: :json
    assert_response :success
  end

  test "should create clip" do
    assert_difference('Clip.count') do
      post clips_url, params: { clip: { length: @clip.length, location: @clip.location, name: @clip.name, start: @clip.start } }, as: :json
    end

    assert_response 201
  end

  test "should show clip" do
    get clip_url(@clip), as: :json
    assert_response :success
  end

  test "should update clip" do
    patch clip_url(@clip), params: { clip: { length: @clip.length, location: @clip.location, name: @clip.name, start: @clip.start } }, as: :json
    assert_response 200
  end

  test "should destroy clip" do
    assert_difference('Clip.count', -1) do
      delete clip_url(@clip), as: :json
    end

    assert_response 204
  end
end
