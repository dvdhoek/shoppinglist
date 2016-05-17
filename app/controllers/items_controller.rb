class ItemsController < ApplicationController

  def index
  	@items = Item.all
  end

  def create
    @item = Item.create(name: params[:name], priority: params[:priority])
    respond_to do |format|

      format.js { }
    end

  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    respond_to do |format|

      format.js { }
    end
  end

  private
    def item_params
      params.require(:item).permit(:name, :priority)
    end
end

