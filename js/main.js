var Operar, Resta, obj, obj2,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Operar = (function() {
  var d;

  Operar.prototype.suel = 10;

  d = 10;

  function Operar(valor1, valor2) {
    this.valor1 = valor1;
    this.valor2 = valor2;
  }

  Operar.prototype.sumar = function() {
    var r;
    r = this.valor1 + this.valor2;
    return console.log("la suma de " + this.valor1 + " y " + this.valor2 + " es " + r);
  };

  return Operar;

})();

Resta = (function(superClass) {
  extend(Resta, superClass);

  function Resta() {
    Resta.__super__.constructor.apply(this, arguments);
  }

  Resta.prototype.restar = function() {
    var res;
    res = this.valor1 - this.valor2;
    return console.log("la resta de " + this.valor1 + " y " + this.valor2 + " es " + res);
  };

  return Resta;

})(Operar);

obj = new Operar(2, 2);

obj.sumar();

obj2 = new Resta(3, 2);

obj2.restar();


/*

class Vehicle
  constructor: (@type,@hero) ->
  @use: (@a,@b)->
    console.log "hola #{@a} tu usas #{@b}"

Vehicle.use("jeison","carro")

class BatMobile extends Vehicle
  constructor: ->
    super "car", "Batman"


class BatPod extends Vehicle
  fuel: 0
  constructor: ->
    super "moto", "Robin"

class BatPod extends Vehicle
  refuel: ->
  @fuel = 10   
    
superman = new Hero "fly"
Hero.count()

class Hero
  _count = 0
  constructor: (@power) ->
    _count++
    @says()
  says: ->
    console.log "#{@number}. my superheroes es #{@power}"
  number: -> _count
  @count: ->
    console.log "Number of instances #{_count}"


superman = new Hero "fly"
batman = new Hero "a belt with gadgets"
Hero.count()


Nombre = (@nombre) ->

Nombre::ingresar = -> console.log "mi nombre es #{@nombre}"
obj = new Nombre "jeison"
obj.ingresar()

class Hero
  constructor: (@power) ->
superman = new Hero "fly"
superman.power
$ ->
    $("#boton1").click ->
        $("#formulario").html('<p>lsfj</p>')
    $("#boton2").click ->
        d = 3
        f = 4
        s = d + f 
        alert "la suma es  #{s}"

va = ["jeison","samir","castro","yrma","jaja"]
coffee  -o js/ --no-header -w -c -b  main.coffee

var x = $(document);
x.ready(Inicio);
function Inicio(){
  $("#boton1").click(function() {
  $("#formulario").html('<p>lsfj</p>')
   });;

  $("#boton2").click(function(){
    alert('hola');
    });
 */
