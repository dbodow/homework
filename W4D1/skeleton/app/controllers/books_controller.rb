class BooksController < ApplicationController
  def index
    # your code here
    @books = Book.all
  end

  def new
    # your code here
    render 'new.html.erb'
  end

  def create
    # your code here
    book = Book.new(book_params)
    if book.save
      index
      render :index
    else
      render json: book.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    # your code here
    book = Book.find(params[:id])
    if book.destroy
      index
      render :index
    else
      render json: "Book deletion failed"
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
