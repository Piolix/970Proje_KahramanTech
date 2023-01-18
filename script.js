let product=new Array();

function test(price,product_id,product_photo){
    
    var sayac=0;
    var index_found=null;
    var addProduct=new Array();
    addProduct["Price"]=price;
    addProduct["Photo_url"]=product_photo;

    product.map((prod) => {
        console.log("map calisti");
        console.log(prod);
            if(prod.Photo_url==product_photo){
                index_found=sayac;
                sayac++;
                console.log("Aynı ürün bulundu. Silinecek.");
                    product.splice(index_found,1);
                    console.log("Ürün sepetten çıkarıldı"+product_photo);
                    console.log(product);
        }
        else{
            sayac++;
        }
        
    });

    if(index_found==null){
        product.push(addProduct);
        console.log("Ürün sepete eklendi"+product_photo);
        console.log(product);
    }
    var s=0;
    product.forEach(element => {
        localStorage.setItem("products"+s,element);
        s++;
    });
    s--;
    
    checkProduct();
}

function checkProduct(){
    var tot_product=product.length;
    localStorage.setItem("total_prod",tot_product);
    console.log(""+tot_product);
    document.getElementById("total_product").innerHTML=""+tot_product;
}

//Sepet

function Cart_PageLoaded(){
    var prodss=new Array();
    for(var i=0;i<=localStorage.getItem(total_prod);i++){
        prodss.push(localStorage.getItem("products"+i));
    }
    prodss.map((prod) => {
        document.getElementsByClassName("content").innerHTML+=`
        <div class="products">
            <div class="row">
                <div class="one-third"><img class="products_foto" src="${prod.Photo_url}"></div>
                <div class="one-third__mid"><input type="number" name="quantity" value="1" min="1" max="10" style="width:50px;"><h3 class="Top_Adetli_Fiyat">Adet   ${prod.Price}TL                                       Toplam Fiyat: </h3></div>
                <div class="one-third">
                    <h1>Sepet özetiniz</h1>
                    <p class="shopping-cart-inf"></p>
                </div>
            </div>
        </div>
        `;
    });
}