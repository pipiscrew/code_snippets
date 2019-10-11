
            function initGraph() {
                var data = [];
                var user = [];
                var label_format = '%M:%S';
                if (vid_duration > 3600) {
                    label_format = '%H:%M:%S';
                }

                u2f_chart = new Highcharts.Chart({
                    chart : {
                        events : {
                            load : chart_loaded
                        },

                        renderTo : 'chart_container',
                        type : 'scatter',
                        backgroundColor : 'transparent',
                        marginBottom : 0 //for legend
                    },

                    title : {
                        text : null
                    },

                    credits : {
                        enabled : false
                    },

                    exporting : {
                        enabled : false
                    },
                    legend : {
                        enabled : false
                    },
                    xAxis : {
                        type : 'datetime',
                        lineWidth : 1,
                        minorGridLineWidth : 0,
                        lineColor : '#4abbe4',
                        minorTickLength : 0,
                        tickLength : 0,
                        tickColor : '#4abbe4',
                        offset : -10,
                        title : {
                            text : null
                        },
                        dateTimeLabelFormats : {
                            second : label_format,
                            minute : label_format,
                            hour : '%H:%M',
                            day : '%d %b',
                            week : '%d %b',
                            month : '%b'
                        },
                        labels : {
                            enabled : false
                        },
                        opposite : true,
                        minPadding : 0,
                        maxPadding : 0,
                        min : 0,
                        max : vid_duration * 1000
                    },
                    yAxis : {
                        min : minval,
                        max : maxval,
                        endOnTick : false,
                        alternateGridColor : 'transparent',
                        lineWidth : 0,
                        gridLineWidth : 0,
                        gridLineColor : '#ccc',
                        title : {
                            text : null
                        },
                        lineWidth : 0,
                        tickWidth : 0,
                        labels : {
                            enabled : false
                        }
                    },

                    tooltip : {
                        enabled : false,
                    },
                    plotOptions : {
                        series : {
                            events : {
                                legendItemClick : function() {
                                    return false;
                                    // cancel any legend click by default
                                }
                            }
                        },
                        area : {
                            visible : false
                        }
                    },
                    series : [{
                        name : "Everyone",
                        allowPointSelect : true,
                        lineWidth : 0,
                        shadow : false,
                        color : '#4abbe4',
                        data : data,
                        marker : {
                            radius : MARKER_RADIUS
                        },
                        point : {
                            events : {
                                mouseOver : function(e) {
                                    $("#moment_stats").css("display", "block");
                                    if (this["comments"] != "<ul></ul>") {

                                        $("#comments_title").html("<b>Comments: </b>");
                                        //$("#div_comments").html(this["comments"]);

                                    }

                                    if (this["count"]) {
                                        $("#moment_votes").html("Votes: <span class='moment_stat_text'>" + this["count"] + "</span>");
                                    }

                                    if (this["avg"]) {

                                        $("#moment_avg").html("Average: <span class='moment_stat_text'>" + parseFloat(this["avg"]).toFixed(1) + "</span>");
                                    }

                                    $(".li_comments").css("font-weight", "normal");
                                    $(".li_" + (this.x / 1000)).css("font-weight", "bold");

                                    $("#moment_time").html(Highcharts.dateFormat('%H:%M:%S', this.x));

                                },
                                click : function(e) {
                                    return true;

                                },
                                select : function(e) {
                                    chart_select_point_event(e, this);
                                    return true;
                                },
                                unselect : function(e) {
                                    return false;
                                }
                            }
                        }
                    }]
                });

            }