class PostsController < ApplicationController

    # Se ejecuta antes de la acción 'destroy' para encontrar y establecer el post específico
    before_action :set_post, only: [:destroy]
  
    # GET /posts
    # Retorna una lista de todos los posts en formato JSON
    def index
      @posts = Post.all
      render json: @posts
    end
  
    # POST /posts
    # Crea un nuevo post con los parámetros proporcionados. Si se crea con éxito, retorna el post creado en formato JSON.
    # Si hay errores en la creación, retorna los errores en formato JSON.
    def create
      @post = Post.new(post_params)
      if @post.save
        render json: @post, status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /posts/:id
    # Elimina el post especificado por el ID proporcionado y lo retorna en formato JSON.
    def destroy
      @post.destroy
      render json: @post
    end
  
    private
  
    # Encuentra el post por su ID y lo establece en la variable de instancia @post
    def set_post
      @post = Post.find(params[:id])
    end
  
    # Permite la recepción segura de los parámetros de post. Solo permite los atributos 'name' y 'description'.
    def post_params
      params.require(:post).permit(:name, :description)
    end
end
