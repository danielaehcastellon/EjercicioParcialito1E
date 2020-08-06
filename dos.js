/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{
	let articulo;
    let categoria;
    let categoriaL;
    let categoriaB;
    let precio;
    let resp;

    do
    {

    articulo = prompt("Ingrese nombre de articulo.");
    categoria = prompt("Ingrese categoria del articulo. Ej: lacteos"); //dudo de esto
    precio = parseInt(prompt("Ingrese precio del articulo."));

    if(precio >0 && precio <1000)
    {
    
    }else if (articulo == categoriaB) {

    }else if (categoriaL )


    resp=prompt("Desea seguir ingresando? si/no");
    }while (resp=="si");


    document.write("Articulo de mayor precio "+articulo+"<br>");
    document.write(""<br>");
  	//alert("Articulo de mayor precio "+articulo+". Articulo de mayor precio de lacteos "+categoriaL+". "+cantidadB+" articulos de bebidas.");
	
}