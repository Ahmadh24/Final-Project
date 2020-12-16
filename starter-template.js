function getProductList()
{
    axios.get('http://csc225.mockable.io/consoles')
                    .then((response) => {
                        this.data = response.data;
                        
                        document.getElementById("loading").style.display = "none";

                        this.data.forEach(function(item) {

                            product = "<div class="+ "col"+"><button class=" +"\"btn btn-large productButton" + "\" onclick=" + "\" getProductDetails("+ item.id +")\">" 
                                      + item.name + "</button>"; 

                            $(product).appendTo( "#productList" );
                            
                          });
                    })
                    .catch(error => {
                        console.log("Error occured " + error);
                      });
}

function getProductDetails(itemId)
{
    uri = 'http://csc225.mockable.io/consoles/' +  itemId;
    if (document.getElementById('productDescription'))
    document.getElementById("productDescription").remove();
    
    loading = "<div id="+ "\"Loading Description" + "\"><h4>Loading ...</h4></div>";

    $(loading).appendTo( "#productDetails" ).attr('id', 'loadingProductDescription');

    axios.get(uri)
    .then((response) => {

        this.data = response.data;

        document.getElementById("loadingProductDescription").remove();
        
        product="<div class="+ "\"card" + "\" style=" + "\"width: 18rem; margin-top: 20px;" + "\">" + 
            "<img class="+ "\"card-img-top" + "\"src="+  this.data.image + "\" >" +  
            "<div class="+ "\"card-body"+ "\">" +  
                "<h5 class="+ "\"card-title" + "\" >" + this.data.name +"</h5>" +
                "<p class="+ "\"card-text" + "\">This product is Made in " + this.data.country + " <br> Released in " + this.data.releaseYear + "</p>" +
                "<button  class="+ "\"btn btn-primary" +"\" disabled><h4>$" + this.data.price + "</h4></button></div></div>";

        $(product).appendTo( "#productDetails" ).attr('id', 'productDescription');
    })
    .catch(error => {
        console.log("Error occured " + error);
    });
}