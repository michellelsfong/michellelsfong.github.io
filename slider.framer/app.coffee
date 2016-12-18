# ///////////////////// Sidebar //////////////////////

sideBar = new Layer
	backgroundColor: "rgba(255,255,255,1)"
	index: 2

sideBar.width = 250
sideBar.height = 800

# ///////////////////// Slidebar //////////////////////

slideBar = new Layer
	backgroundColor: "rgb(100,200,100)"
	index: 1
	html:
		"Commuting" + "<p></p>" +
		"Outdoors" + "<p></p>" +
		"College" + "<p></p>" +
		"My growing family" + "<p></p>" +
		"Long distances" + "<p></p>" +
		"Fitting all my stuff" + "<p></p>" +
		"Easy parking" + "<p></p>" +
		"Good for the Earth" + "<p></p>" +
		"None of these"
# 	x: 250
	style:
		"lineHeight" : "60px"
		"paddingLeft" : "30px"
		"paddingTop" : "60px"
		"fontSize" : "21px"
		"fontFamily" : "Gotham"

slideBar.width = 250
slideBar.height = 800

# ////////////////////// Need ///////////////////////

needTitle = new Layer
    html: "NEED"
    scale: 0.4
    x: -30
    y: -20
    style:
        "fontSize" : "21pt",
        "color" : "#424242"
        "backgroundColor" : "rgba(255,255,255,0)"
        "fontFamily" : "GothamBook"
        "letterSpacing" : "1px"

needDropdown = new Layer
	backgroundColor: "rgba(0,0,0,0)"
	borderWidth: 1
	x: 30
	y: 70
	style:
		"borderTop" : "0"
		"borderRight" : "0"
		"borderLeft" : "0"

needDropdown.width = 190
needDropdown.height = 30

needDropdown.onClick (event, layer) ->
	slideBar.animate
		x: 250
		options:
			time: 1



# ///////////////////// Slider //////////////////////

# Slider =====================================================

slider = new SliderComponent
    min: 1
    max: 60
    value: 30
    height: 3
    x: 30
    y: 240

slider.backgroundColor = "#eee"
slider.knob.draggable.momentum = false
slider.knob.width = 32
slider.knob.height = 20
slider.width = 191

# Value
slider.on "change:value", ->
    sliderPrice.html = updateSliderPrice(slider.value)

# Functions
updateSliderPrice = (price) ->
	"$" + Math.round(price) + "K"

# Title =====================================================

sliderTitle = new Layer
    html: "MAX PRICE"
    scale: 0.4
    originX: 0.00
    originY: 0.00
    y: -70
    style:
        "fontSize" : "21pt",
        "color" : "#424242"
        "backgroundColor" : "rgba(255,255,255,0)"
        "fontFamily" : "GothamBook"
        "letterSpacing" : "1px"

sliderTitle.superLayer = slider



# Price =====================================================

sliderPrice = new Layer
	html: updateSliderPrice(slider.value)
	y: -35
	scale: 0.7
	originX: 0.00
	originY: 0.00
	style:
		"fontSize" : "21pt",
		"color" : "#424242"
		"backgroundColor" : "rgba(255,255,255,0)"
		"fontFamily" : "Gotham"

sliderPrice.superLayer = slider
