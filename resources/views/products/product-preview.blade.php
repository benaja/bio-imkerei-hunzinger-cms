<div class="product-preview">
    <div class="product-image" style='background-image: url("{{$product->image('cover')}}")'></div>
    <h3>{{$product->title}}</h3>
    <p>{{$product->description}}</p>
</div>

<style>
.product-image{
    width: 300px;
    height: 200px;
    /* background-image: url({{$product->image('cover')}}); */
}
</style>