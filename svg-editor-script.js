var currentTool = 0;
var sound = new Audio("adriantnt_bubble_clap.mp3");
var begin = 0;
var ok = 1;
var move=1;

function svgEditor() {

    $("#x").hide();

    document.getElementById('line_tool').onclick = function (e) {
        
        sound.play();
        begin = 0;
        currentTool = 1;
        refreshBackgroundColor();
        changeBackgroundColor();
        Draw(e);
    }

    document.getElementById('rectangular_tool').onclick = function (e) {
        
        sound.play();
        begin = 0;
        currentTool = 2;
        refreshBackgroundColor();
        changeBackgroundColor();
        Draw(e);
    }

    document.getElementById('ellipse_tool').onclick = function (e) {
        
        sound.play();
        begin = 0;
        currentTool = 3;
        refreshBackgroundColor();
        changeBackgroundColor();
        Draw(e);
    }

    document.getElementById('select_tool').onclick = function (e) {
        sound.play();
        begin = 0;
        currentTool = 4;
        refreshBackgroundColor();
        changeBackgroundColor();
        Draw(e);
    }

    document.getElementById('text_tool').onclick = function (e) {
        sound.play();
        begin = 0;
        currentTool = 5;
        refreshBackgroundColor();
        changeBackgroundColor();
        Draw(e);
    }
}

function changeBackgroundColor() {

    if (currentTool == 1) {
        $('#line_tool').css({ 'background-color': '#eafc00' });
    } else
        if (currentTool == 2) {
            $('#rectangular_tool').css({ 'background-color': '#eafc00' });
        } else
            if (currentTool == 3) {
                $('#ellipse_tool').css({ 'background-color': '#eafc00' });
            }else
                if (currentTool == 4) {
                    $('#select_tool').css({ 'background-color': '#eafc00' });
                }else
                    if (currentTool == 5) {
                        $('#text_tool').css({ 'background-color': '#eafc00' });
                    }
}

function refreshCurrentTool() {
    if (currentTool == 1) {
        currentTool = 0;
    }else
        if (currentTool == 2) {
            currentTool = 0;
        }else
            if (currentTool == 3) {
                currentTool = 0;
            }else
                if (currentTool == 4) {
                    currentTool = 0;
                }else
                    if (currentTool == 5) {
                        currentTool = 0;
                    }
}

function refreshBackgroundColor() {
    if (currentTool == 1) {
        $('#rectangular_tool').css({ 'background-color': '#7c7575' });
        $('#ellipse_tool').css({ 'background-color': '#7c7575' });
        $('#select_tool').css({ 'background-color': '#7c7575' });
        $('#text_tool').css({ 'background-color': '#7c7575' });
    } else
        if (currentTool == 2) {
            $('#line_tool').css({ 'background-color': '#7c7575' });
            $('#ellipse_tool').css({ 'background-color': '#7c7575' });
            $('#select_tool').css({ 'background-color': '#7c7575' });
            $('#text_tool').css({ 'background-color': '#7c7575' });
        } else
            if (currentTool == 3) {
                $('#line_tool').css({ 'background-color': '#7c7575' });
                $('#rectangular_tool').css({ 'background-color': '#7c7575' });
                $('#select_tool').css({ 'background-color': '#7c7575' });
                $('#text_tool').css({ 'background-color': '#7c7575' });
            }else
                if (currentTool == 4) {
                    $('#line_tool').css({ 'background-color': '#7c7575' });
                    $('#rectangular_tool').css({ 'background-color': '#7c7575' });
                    $('#ellipse_tool').css({ 'background-color': '#7c7575' });
                    $('#text_tool').css({ 'background-color': '#7c7575' });
                }else
                    if (currentTool == 5) {
                        $('#line_tool').css({ 'background-color': '#7c7575' });
                        $('#rectangular_tool').css({ 'background-color': '#7c7575' });
                        $('#ellipse_tool').css({ 'background-color': '#7c7575' });
                        $('#select_tool').css({ 'background-color': '#7c7575' });
                    }
}

function Draw(e) {
    var mLeft = 1, mRight = 3, del = 46;
    var x1 = e.clientX, y1 = e.clientY;
    var selectedItemForMove = null;
    var selectedItem=null;

    $("#svg")
    .mousedown(function (e) {
        if (e.which == mLeft) {
            x1 = e.pageX - this.getBoundingClientRect().left;
            y1 = e.pageY - this.getBoundingClientRect().top;

            if (currentTool == 2) {
                $("#rectangular")
                .setCoordinatesForRectangular(x1, y1, x1, y1)
                .show();
                begin = 1;
            }else
                if(currentTool==3){
                    $("#ellipse")
                    .setCoordinatesForEllipse(x1, y1, x1, y1)
                    .show();
                    begin = 1;
                }else
                    if (currentTool == 1) {
                        $("#line")
                        .setCoodinatesForLine(x1, y1, x1, y1)
                        .show();
                        begin = 1;
                    }else
                        if (currentTool == 4) {
                            if (ok == 1) {
                                sound.play();
                                $(this).attr('class', "selected");
                                $(this).attr('style', "fill:purple; stroke:gray; fill-opacity:0.5");
                                selectedItemForMove = this;
                                ok = 0;
                            } else {
                                $(this).attr('class', "");
                                selectedItemForMove = null;
                                ok = 1;
                            }
                            
                        }else
                            if (currentTool == 5) {
                                    $("#x")
                                    .setCoordinatesForTextArea(x1, y1, x1, y1)
                                    .show();
                                    begin = 1;

                            }
        }
    })
    .mouseup(function (e) {
        if (e.which == mLeft) {
            x2 = e.pageX - this.getBoundingClientRect().left;
            y2 = e.pageY - this.getBoundingClientRect().top;

            if (currentTool == 2) {
               // $("#x").hide();
                $("#rectangular").hide()
                $(document.createElementNS("http://www.w3.org/2000/svg", "rect"))
                .setCoordinatesForRectangular(x1, y1, x2, y2).attr('style', "fill:blue; stroke:red; fill-opacity:0.33")
                .mousedown(function (e) {
                    if (e.which == mRight) {
                        if (ok == 1) {
                            sound.play();
                            $("#elements rectangular").attr('class', "");
                            $(this).attr('class', "selected");
                            $(this).attr('style', "fill:green; stroke:gray; fill-opacity:0.5");
                            selectedItem = this;
                            ok = 0;
                        } else {
                            $(this).attr('class', "");
                            $(this).attr('style', "fill:blue; stroke:red; fill-opacity:0.33");
                            selectedItem = null;
                            ok = 1;
                        }
                    }else
                        if(e.which==mLeft && currentTool==4){
                            if(move==1){
                                sound.play();
                                $("#ellements rectangular").attr('class', "");
                                $(this).attr('class', "selectedForMove");
                                $(this).attr('style', "fill:purple; stroke:gray; fill-opacity:0.33");
                                selectedItemForMove=this;
                                move=0;
                            }else{
                                $(this).attr('class',"");
                                $(this).attr('style',"fill:blue; stroke:red; fill-opacity:0.33");
                                selectedForMove=null;
                                move=1;
                            }
                }
                    })
                .appendTo($("#elements"));
                refreshBackgroundColor();
                $('#rectangular_tool').css({'background-color':'#7c7575'});
                currentTool = 0;
                begin = 1;
            }else
                if (currentTool == 3) {
                    //$("#x").hide();
                    $("#ellipse").hide()
                    $(document.createElementNS("http://www.w3.org/2000/svg", "ellipse"))
                    .setCoordinatesForEllipse(x1, y1, x2, y2).attr('style', "fill:red; stroke:blue; fill-opacity:0.33")
                    .mousedown(function (e) {
                        if (e.which == mRight) {
                            if (ok == 1) {
                                sound.play();
                                $("#elements ellipse").attr("class", "");
                                $(this).attr("class", "selected");
                                $(this).attr("style", "fill:green; stroke:gray; fill-opacity:0.5");
                                selectedItem = this;
                                ok = 0;
                                //currentTool=0;
                            } else {
                                $(this).attr("class", "");
                                $(this).attr("style", "fill:red; stroke:blue; fill-opacity:0.33");
                                selectedItem = null;
                                ok = 1;
                                //currentTool=0;
                            }
                        }
                    })
                    .appendTo($("#elements"));
                    refreshBackgroundColor();
                    $('#ellipse_tool').css({'background-color':'#7c7575'});
                    currentTool = 0;
                    begin = 1;
                }else
                    if (currentTool == 1) {
                        
                        $("#line").hide()
                        $(document.createElementNS("http://www.w3.org/2000/svg", "line"))
                        .setCoodinatesForLine(x1, y1, x2, y2).attr('style', "fill:yellow; stroke:yellow")
                        .mousedown(function (e) {
                            if(e.which==mRight){
                            if (ok == 1) {
                                sound.play();
                                $("#elements line").attr('class', "");
                                $(this).attr('class', "selected");
                                $(this).attr('style', "fill:green; stroke:gray; fill-opacity:0.5");
                                selectedItem = this;
                                ok = 0;
                            } else {
                                $(this).attr('class', "");
                                $(this).attr('style', "fill:yellow; stroke:yellow");
                                selectedItem = null;
                                ok = 1;
                            }
                            }
                        })
                        .appendTo($("#elements"));
                        refreshBackgroundColor();
                        changeBackgroundColor();
                        $('#line_tool').css({'background-color':'#7c7575'});
                        currentTool=0;
                        begin = 1;
                    }else
                        if (currentTool == 5) {
                            $("#x").show();
                            var textArea = document.createElementNS("http://www.w3.org/1999/xhtml", "TEXTAREA");
                            textArea.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/xmlns/");
                            var fo = document.createElementNS("http://www.w3.org/2000", "foreignObject");
                            fo.appendChild(textArea);
                            $(document.createElementNS("http://wwww.w3.org/2000/svg", "rect"))
                            .setCoordinatesForTextArea(x1, y1, x2, y2).attr('style', "fill:green; stroke:orange; fill-opacity:0.33")
                            .appendChild(textArea)
                            .mousedown(function (e) {
                                if (e.which == mRight) {
                                    if (ok == 1) {
                                        sound.play();
                                        $("#elements foreignObject").attr('class', "");
                                        $(this).attr('class', "selected");
                                        $(this).attr('style', "stroke:orange");
                                        selectedItem = this;
                                        ok = 0;
                                    } else {
                                        $(this).attr('class', "");
                                        $(this).attr('style', "stroke:orange");
                                        selectedItem = null;
                                        refreshBackgroundColor();
                                        changeBackgroundColor();
                                        currentTool=0;
                                        ok = 1;
                                    }
                                }
                            }).appendTo($("#elements"));
                            refreshBackgroundColor();
                            $('#text_tool').css({'background-color':'#7c7575'});
                            currentTool=0;
                            begin = 1;
                        }
        }
    })
    .mousemove(function (e) {
        x2 = e.pageX - this.getBoundingClientRect().left;
        y2 = e.pageY - this.getBoundingClientRect().top;

        if (begin != 0) {
            if (currentTool == 2) {
                $("#rectangular")
                .setCoordinatesForRectangular(x1, y1, x2, y2);
                
            }else
                if (currentTool == 3) {
                    $("#ellipse")
                    .setCoordinatesForEllipse(x1, y1, x2, y2);
                }else
                    if (currentTool == 1) {
                        $("#line")
                        .setCoodinatesForLine(x1, y1, x2, y2);
                    }/*else
                        if (currentTool == 5) {
                            $("#x")
                            .setCoordinatesForTextArea(x1, y1, x2, y2);
                        }*/
        }
    }).contextmenu(function () {
        return false;
    });

    $(document).keydown(function (e) {
        if (selectedItem && e.keyCode == del) {
            selectedItem.remove(); 
        }
    });
}

$.fn.setCoordinatesForRectangular = function (x1, y1, x2, y2) {
    return this.attr({
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x1 - x2),
        height: Math.abs(y1 - y2)
    });
}

$.fn.setCoordinatesForEllipse = function (x1, y1, x2, y2) {
    return this.attr({
        cx: x1,
        cy: y1,
        rx: Math.abs(x1 - x2),
        ry: Math.abs(y1 - y2)
    });
}

$.fn.setCoodinatesForLine = function (x1, y1, x2, y2) {
    return this.attr({
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2
    });
}

$.fn.setCoordinatesForTextArea = function (x1, y1, x2, y2) {
    return this.attr({
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x1 - x2),
        height: Math.abs(y1 - y2)
    });
}


