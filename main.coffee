class Operar
  suel: 10
  d = 10
  constructor: (@valor1,@valor2)->
  sumar: ->
    r = @valor1+@valor2
    console.log "la suma de #{@valor1} y #{@valor2} es #{r}"

class Resta extends Operar
  constructor: ->
    super
  restar: ->
    res =  @valor1-@valor2
    console.log "la resta de #{@valor1} y #{@valor2} es #{res}"


obj = new Operar(4,4)
obj.sumar()

obj2 = new Resta(3,2)
obj2.restar()

###

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
###