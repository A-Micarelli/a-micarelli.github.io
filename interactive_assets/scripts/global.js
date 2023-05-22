var tween, tween1, tween2, tween3, tween4, tween5, tween6, tween7, tween8, tween9; // gsap tween variable
var timeout, timeout1, timeout2, timeout3;
var animQueue, animQueue1, animQueue2, animQueue3, animQueue4; //multiple variable to assign animation if same lavel
$("document").ready(function () {
    $("#global_menu .bottom_nav,#global_menu .top_nav").css("display", "none");
    $(".container").addClass("active");

    //click function for next and previus button to switch the screens 
    var screen = 0;
    let screenNavObject = {
        '4': {
            prev: null,
            next: '5'
        },
        '5': {
            prev: '4',
            next: '6'
        },
        '6': {
            prev: '5',
            next: '8'
        },
        '7': {
            prev: '6',
            next: '8'
        },
        '8': {
            prev: '6',
            next: '10'
        },
        '9': {
            prev: '6',
            next: null
        },
        '9a': {
            prev: '6',
            next: null
        },
        '9b': {
            prev: '6',
            next: null
        },
        '10': {
            prev: '8',
            next: '11'
        },
        '11': {
            prev: '10',
            next: '12'
        },
        '12': {
            prev: null,
            next: null
        },
        '13': {
            prev: '12',
            next: "14"
        },
        '14': {
            prev: '13',
            next: '15'
        },
        '15': {
            prev: '14',
            next: '16'
        },
        '16': {
            prev: '15',
            next: '17'
        },
        '17': {
            prev: '16',
            next: '18'
        },
        '18': {
            prev: '17',
            next: '19'
        },
        '19': {
            prev: '18',
            next: '20'
        },
        '20': {
            prev: null,
            next: null
        },
        '21': {
            prev: '20',
            next: '22'
        },
        '22': {
            prev: '21',
            next: '23'
        },
        '23': {
            prev: '22',
            next: '24'
        },
        '24': {
            prev: '23',
            next: '25'
        },
        '25': {
            prev: null,
            next: null
        }
    }
    $("#back_btn,#next_btn").click(function () {
        $(animQueue, animQueue1, animQueue2, animQueue3).stop();
        if ($(this).attr('id') == "back_btn" && screen == '15' && $("#screen15 > .right_popup").css('display') == "block") {
            screen15.show();
            return;
        } else if ($(this).attr('id') == "back_btn" && screen == '16' && $("#screen16 > .right_popup").css('display') == "block") {
            screen16.show();
            return;
        }

        if ($(this).attr('id') == "next_btn") {
            // if(screen == 6) screen = 8;
            // else screen++;
            screen = screenNavObject[screen].next;
        } else {
            // if(screen == 8) screen = 6;
            // else screen--;
            screen = screenNavObject[screen].prev;
        }
        console.log(screen);

        // if pause is pressed, play animations
        if ($("#global_menu > .bottom_nav > #pause_play_btn").hasClass('playstate')) {
            $("#global_menu > .bottom_nav > #pause_play_btn").trigger('click');
        }

        switch (screen) {
            case '4':
                screen4show();
                break;
            case '5':
                // screen5show();
                screen5.show();
                break;
            case '6':
                // screen6show();
                screen6.show();
                break;
            case '7':
                screen7.show();
                break;
            case '8':
                screen8.show();
                break;
            case '10':
                screen10.show();
                break;
            case '11':
                screen11.show();
                break;
            case '12':
                screen12.show();
                break;
            case '13':
                screen13.show();
                break;
            case '14':
                screen14.show();
                break;
            case '15':
                screen15.show();
                break;
            case '16':
                screen16.show();
                break;
            case '17':
                screen17.show();
                break;
            case '18':
                screen18.show();
                break;
            case '19':
                screen19.show();
                break;
            case '20':
                screen20.show();
                break;
            case '21':
                screen21.show();
                break;
            case '22':
                screen22.show();
                break;
            case '23':
                screen23.show();
                break;
            case '24':
                screen24.show();
                break;
            case '25':
                screen25.show();
                break;
            default:
                return;
        }
    });

    // function to pause all animations
    async function pauseAllAnimations() {
        gsap.globalTimeline.pause();
    }

    // function to resume all animations
    async function resumeAllAnimations() {
        gsap.globalTimeline.play();
    }

    // enable next btn
    function enableNext(override) {
        if (!override) {
            let nextScreen = screenNavObject[screen].next;
            if ($(`#screen${nextScreen}`).attr('isViewed') == 'true') $("#next_btn").removeClass('disable');
        } else {
            $("#next_btn").removeClass('disable');
        }
    }

    // disable next btn
    function disableNext() {
        $("#next_btn").addClass('disable');
    }

    // enable back btn
    function enableBack() {
        $("#back_btn").removeClass('disable');
    }

    // disable next btn
    function disableBack() {
        $("#back_btn").addClass('disable');
    }

    // enable home btn
    function enableHome() {
        $("#home_btn").removeClass('disable');
    }

    // disable home btn
    function disableHome() {
        $("#home_btn").addClass('disable');
    }

    // adding event listener for home button click
    $("#home_btn").on('click', () => {
        // if pause is pressed, play animations
        if ($("#global_menu > .bottom_nav > #pause_play_btn").hasClass('playstate')) {
            $("#global_menu > .bottom_nav > #pause_play_btn").trigger('click');
        }
        screen7.show(true);
    });

    //function to show and hide the screen
    let screenShowHide = (hidescreen, showscreen) => {
        animQueue = $(hidescreen).animate({
            opacity: '0'
        }, 200, function () {
            $(hidescreen).css('display', "none");
        });

        gsap.to(showscreen, {
            opacity: 1,
            display: 'block',
            duration: 0.1
        });

        // setting a property for the current slide to verify later if this slide is previously viewed or not
        $(showscreen).attr('isViewed', 'true');

        // enabling and disabling home btn for specific screens
        let homeEnabledScreens = [
            "#screen8", "#screen9", "#screen9a", "#screen9b",
            "#screen10", "#screen11", "#screen13", "#screen14",
            "#screen15", "#screen16", "#screen17", "#screen18", "#screen19", "#screen21",
            "#screen22", "#screen23", "#screen24"
        ];

        let currentScreen = `#screen${screen}`;
        if (homeEnabledScreens.includes(currentScreen)) enableHome();
        else disableHome();

        // activating and deactivating bottom right five icons in bottom nav
        let bottomRightNavActive = {
            "menu1": [
                "8", "9", "9a", "9b",
                "10", "11", "12", "13",
                "14", '15', '16',
                '17', "18", "19",
                "21", "22", "23", '24'
            ],
            "menu2": [
                "10", "11", "12", "13",
                "14", '15', '16',
                '17', "18", "19",
                "21", "22", "23", '24'
            ],
            "menu3": [
                "14", '15', '16',
                '17', "18", "19",
                "21", "22", "23", '24'
            ],
            "menu4": [
                "17", "18", "19",
                "21", "22", "23", '24'
            ],
            "menu5": [
                "21", "22", "23", '24'
            ]
        }

        $("ul.menu > #menu1, ul.menu > #menu2, ul.menu > #menu3, ul.menu > #menu4, ul.menu > #menu5").removeClass('active');

        for (let [menu, screenArray] of Object.entries(bottomRightNavActive)) {
            if (screenArray.includes(screen)) {
                $(`ul.menu > #${menu}`).addClass('active');
            } else continue;
        }

        // //pause enabled screens
        let pauseEnabledScreens = [
            "4", "5", "6", "7", "8", "9", "9a", "9b",
            "10", "11", "12", "13",
            "14", '15', '16',
            '17', "18", "19",
            "21", "22", "23", '24'
        ];

        if (pauseEnabledScreens.includes(screen)) {
            $("#global_menu > .bottom_nav > #pause_play_btn").css('display', 'block')
        } else $("#global_menu > .bottom_nav > #pause_play_btn").css('display', 'none')

        // function to pause / play animations
        $("#global_menu > .bottom_nav > #pause_play_btn").on('click', async e => {
            e.stopImmediatePropagation();

            if (pauseEnabledScreens.includes(screen)) {
                let currentBtnState = e.currentTarget.classList[0];
                if (currentBtnState == "pausestate") {
                    // animations are currently playing. they should pause now
                    await pauseAllAnimations();
                    $("#global_menu > .bottom_nav > #pause_play_btn").removeClass('pausestate').addClass('playstate');

                    // show transparent div
                    $("#transparent_div").css('display', 'block');

                } else if (currentBtnState == "playstate") {
                    // animations are currently paused. they should play now
                    await resumeAllAnimations();
                    $("#global_menu > .bottom_nav > #pause_play_btn").removeClass('playstate').addClass('pausestate');
                    
                    // hide transparent div
                    $("#transparent_div").css('display', 'none');
                }
            }
        });
    }

    // function for bottom left text
    function changeBottomLeftText(isHome) {
        if (isHome) {
            $("#global_menu #bot_design1 p").html("HOME");
            return;
        }
        let bottomLeftTextObject = {
            "5": "ISTRUZIONI",
            "6": "INCONTRO COL CAPO",
            "7": "INCONTRO COL CAPO",
            "8": "RACOLTA DATI E INFORMAZIONI",
            "9": "GABRIELE-PAZIENTE IPF",
            "9a": "DOTTORESSA CURIO-RADIOLOGA",
            "9b": "DOTTOR ROSSI-PNEUMOLOGO",
            "10": "MEETING ROOM",
            "11": "PRONTI A PARTIRE",
            "13": "INCONTRO COL RESEARCH LEAD",
            "14": "LABORATORIO-TASK DI RICERICA",
            "15": "LABORATORIO-TASK 1",
            "16": "LABORATORIO-TASK 2",
            "17": "PEER REVIEW",
            '18': "RICHIESTA DAL REPARTO MARKETING",
            "19": "SALUTI",
            "21": "IL MERCATO",
            "22": "SELEZIONA LE LEVE DI MARKETING",
            "23": "ESEMPI CAMPAGNE MARKETING",
            "24": "CONCLUSIONE"
        };

        $("#global_menu #bot_design1 p").html(bottomLeftTextObject[screen]);
    }

    //function for start button
    $("#start_button").click(function () {
        $(".body_color").css("background", "white");
        $("#wrapper").addClass("white_bg");
        // $("#screen1").css("display", "none");
        // $("#screen2").css('display', "block");
        $("#screen1").css("visibility", "hidden");
        $("#screen2").css('visibility', "visible");
        var vid = $("#screen2 video")[0];
        vid.play();

        vid.onended = function () {
            screenShowHide("#screen2", "#screen3");
            timeout = setTimeout(function () {
                animQueue = $("#screen3 .line1").animate({
                    opacity: 1,
                }, 800, function () {
                    $("#screen3 .inizia_btn").css("display", "flex");
                    animQueue = $("#screen3 .line2,#screen3 .inizia_btn").animate({
                        opacity: 1
                    }, 800);
                });
            }, 200)
        }
    });

    //function to show screen 4
    screen4show = () => {
        screen = '4';
        resetScreen4()
        screenShowHide("#screen3,#screen5", "#screen4");
        animQueue = $("#screen4 img").animate({
            opacity: '1',
            top: '143px'
        }, 800, function () {
            animQueue = $("#screen4 .line1").animate({
                opacity: '1',
                right: '328px'
            }, 800, function () {
                animQueue = $("#screen4 .line2").animate({
                    opacity: '1',
                    left: '260px'
                }, 800, function () {
                    animQueue = $("#screen4 .line3").animate({
                        opacity: '1'
                    }, 800, function () {
                        animQueue = $("#screen4 .screen4_inizia_btn").animate({
                            bottom: '90px',
                            opacity: '1'
                        }, 800);
                    });
                })
            })
        })
    }

    let screen5 = {
        get parentDiv() {
            return $('#screen5');
        },

        show() {
            screen = '5';
            this.resetCss();
            screenShowHide('.screen:not(#screen5)', this.parentDiv);
            this.animateCss();
        },

        async resetCss() {
            console.log('resetCss');
            gsap.killTweensOf('*');
            if (timeout) clearTimeout(timeout);
            timeout = null;

            disableNext();
            enableNext() // enable next only if visited previously

            changeBottomLeftText();

            // reset top nav
            $("#global_menu > .top_nav").css({
                display: 'none',
                opacity: 0,
                top: '-100px'
                // top: '6px'
            });

            // reset bottom nav
            $("#global_menu > .bottom_nav").css({
                display: 'none',
                opacity: 0,
                bottom: '-200px'
                // bottom: '109px'
            });

            // reset four corner mark elements
            await gsap.to("#screen5 > .mid_content > .mark", {
                scaleX: 0,
                scaleY: 0,
                opacity: 0,
                duration: 0
            });

            // reset mid block
            await gsap.to("#screen5 > .mid_content > .ins_block", {
                opacity: 0,
                duration: 0
            });
        },


        async animateCss() {
            enableNext(true);
            let duration = 0.8;

            // animate top nav and bottom nav
            await Promise.all([
                gsap.to("#global_menu > .top_nav", {
                    display: 'flex',
                    top: '6px',
                    opacity: 1,
                    duration
                }),
                gsap.to("#global_menu > .bottom_nav", {
                    display: 'flex',
                    bottom: '109px',
                    opacity: 1,
                    duration
                })
            ]);


            await Promise.all([
                gsap.to("#screen5 > .mid_content > .mark", {
                    scaleX: 1,
                    scaleY: 1,
                    opacity: 1,
                    // delay: 1,
                    duration
                }),
                gsap.to("#screen5 > .mid_content > .ins_block", {
                    opacity: 1,
                    duration
                })
            ]);
        }
    }

    let screen6 = {
        get parentDiv() {
            return $('#screen6');
        },

        show() {
            screen = '6';
            this.resetCss();
            screenShowHide('.screen:not(#screen6)', this.parentDiv);
            this.animateCss();
        },

        async resetCss() {
            console.log('resetCss');
            gsap.killTweensOf('*');
            if (timeout) clearTimeout(timeout);
            timeout = null;

            disableNext();
            enableNext() // enable next only if visited previously

            changeBottomLeftText();

            // reset top nav
            $("#global_menu > .top_nav").css({
                display: 'none',
                opacity: 0,
                top: '-100px'
                // top: '6px'
            });

            // reset bottom nav
            $("#global_menu > .bottom_nav").css({
                display: 'none',
                opacity: 0,
                bottom: '-200px'
                // bottom: '109px'
            });

            // reset home btn and back btn
            $("#global_menu > .top_nav > #home_btn, #global_menu > .bottom_nav > #back_btn").css({
                opacity: 0,
                left: '-100px'
                // left: '16px'
            });

            // reset exit btn and next btn
            $("#global_menu > .top_nav > #exit_btn, #global_menu > .bottom_nav > #next_btn").css({
                opacity: 0,
                right: '-105px'
                // right: '16px'
            });

            // reset opacity of bottom left text
            $("#global_menu > .bottom_nav > #bot_design1 > p").css({
                opacity: 0
            });

            // reset opacity of bottom right navs
            $("#global_menu > .bottom_nav > #bot_design2 > ul.menu > li").css({
                opacity: 0
            });

            // reset pause btn
            await gsap.to("#global_menu > .bottom_nav > #pause_play_btn", {
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            // reset character
            $("#screen6 > .s6_character").css({
                opacity: 0,
                left: '-589px'
                // left: '81px'
            });

            // reset lungs
            $("#screen6 > .s6_lungs").css({
                opacity: 0
            });

            // reset mid pop
            await gsap.to("#screen6 > .s6_mid_pop", {
                scaleX: 0,
                duration: 0
            });

            // reset s6_block1
            await gsap.to("#screen6 > .s6_block1", {
                display: 'none',
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            // reset s6_block1 text1 and text2
            $("#screen6 > .s6_block1 > .text1, #screen6 > .s6_block1 > .text2").css({
                display: 'none',
                opacity: 0
            });

            // reset s6_block2
            $("#screen6 > #s6_block2").css({
                display: 'none',
                opacity: 0,
                top: '500px'
                // top: '417px'
            });

            // reset s6_block3
            $("#screen6 > #s6_block3").css({
                display: 'none'
            });

            // reset s6_block3 -> p-text1
            $("#screen6 > #s6_block3 > .ptext-1").css({
                opacity: 0
            });

            // reset s6_block3 -> .p-click
            $("#screen6 > #s6_block3 > .p-click").css({
                opacity: 0,
                display: 'none',
            });

            // reset s6_block3 -> #p-click1
            $("#screen6 > #s6_block3 > #p-click1").css({
                top: '496px'
                // top: '396px'
            });

            // reset s6_block3 -> #p-click2
            $("#screen6 > #s6_block3 > #p-click2").css({
                top: '586px'
                // top: '486px'
            });

            // reset s6_block3 -> #p-click3
            $("#screen6 > #s6_block3 > #p-click3").css({
                top: '675px'
                // top: 575px
            });

            // reset s6_block3 -> #p-click4
            await gsap.to("#screen6 > #s6_block3 > #p-click4", {
                display: 'none',
                scaleX: 0,
                scaleY: 0,
                opacity: 0,
                duration: 0
            });

            // reset s6_block3 -> bot_text
            $("#screen6 > #s6_block3 > .bot_text").css({
                display: 'none',
                opacity: 0,
                right: '-200px'
                // right: '283px'
            });

            // reset s6_block3 -> bot_text1
            $("#screen6 > #s6_block3 > .bot_text1").css({
                display: 'none',
                opacity: 0,
                right: '-200px'
                // right: '273px'
            });
            
            // remove done class for popup btns
            $("#screen6 > #s6_block3 > .p-click > .p-image").removeClass("done");
        },

        async animateCss() {
            let duration = 0.8,
                opacity = 1;

            // animate top nav and bottom nav
            await Promise.all([
                gsap.to("#global_menu > .top_nav", {
                    display: 'flex',
                    top: '6px',
                    opacity,
                    duration
                }),
                gsap.to("#global_menu > .bottom_nav", {
                    display: 'flex',
                    bottom: '109px',
                    opacity,
                    duration
                })
            ]);

            // animate bottom left text
            await gsap.to("#global_menu > .bottom_nav > #bot_design1 > p", {
                opacity,
                duration
            });

            // animate bottom right navs
            for (let elem of $("#global_menu > .bottom_nav > #bot_design2 > ul.menu > li")) {
                await gsap.to(elem, {
                    opacity,
                    duration: 0.4
                });
            }

            await Promise.all([
                // animate home btn, back btn
                gsap.to("#global_menu > .top_nav > #home_btn, #global_menu > .bottom_nav > #back_btn", {
                    left: '16px',
                    opacity,
                    duration
                }),

                // animate exit btn, next btn
                gsap.to("#global_menu > .top_nav > #exit_btn, #global_menu > .bottom_nav > #next_btn", {
                    right: '16px',
                    opacity,
                    duration
                }),

                // animate mid pop
                gsap.to("#screen6 > .s6_mid_pop", {
                    scaleX: 1,
                    duration
                }),

                // animate character
                gsap.to("#screen6 > .s6_character", {
                    left: '81px',
                    opacity,
                    duration
                }),

                // animate lungs
                gsap.to("#screen6 > .s6_lungs", {
                    opacity,
                    duration
                }),

                // animate pause btn
                gsap.to("#global_menu > .bottom_nav > #pause_play_btn", {
                    scaleX: 1,
                    scaleY: 1,
                    opacity,
                    duration
                })
            ]);

            await Promise.all([
                // animate s6_block1
                gsap.to("#screen6 > .s6_block1", {
                    display: 'flex',
                    scaleX: 1,
                    scaleY: 1,
                    duration
                }),

                // animate s6_block1 -> text1
                gsap.to("#screen6 > .s6_block1 > .text1", {
                    display: 'block',
                    opacity,
                    duration
                })
            ]);

            // hiding s6_block1 -> text1
            await gsap.to("#screen6 > .s6_block1 > .text1", {
                display: 'none',
                opacity: 0,
                delay: 3,
                duration: 0.4
            });

            // animate s6_block -> text2
            await gsap.to("#screen6 > .s6_block1 > .text2", {
                display: 'block',
                opacity,
                duration
            });

            // animate s6_block2
            await gsap.to("#screen6 > #s6_block2", {
                display: 'flex',
                top: '417px',
                opacity,
                delay: 2,
                duration
            });

            await Promise.all([
                // hide s6_block -> text2
                gsap.to("#screen6 > .s6_block1 > .text2", {
                    display: 'none',
                    opacity: 0,
                    delay: 3,
                    duration: 0.4
                }),

                // hide s6_block2
                gsap.to("#screen6 > #s6_block2", {
                    display: 'none',
                    opacity: 0,
                    delay: 3,
                    duration: 0.4
                })
            ]);

            // animate s6_block3
            await gsap.to("#screen6 > #s6_block3", {
                display: 'block',
                duration: 0
            });

            // animate s6_block3 -> p-text1
            await gsap.to("#screen6 > #s6_block3 > .ptext-1", {
                opacity,
                delay: 1,
                duration
            });

            // animate s6_block3 -> p-click1
            await gsap.to("#screen6 > #s6_block3 > #p-click1", {
                top: '396px',
                display: 'flex',
                opacity,
                duration
            });

            // animate s6_block3 -> p-click2
            await gsap.to("#screen6 > #s6_block3 > #p-click2", {
                top: '486px',
                display: 'flex',
                opacity,
                duration
            });

            // animate s6_block3 -> p-click3
            await gsap.to("#screen6 > #s6_block3 > #p-click3", {
                top: '575px',
                display: 'flex',
                opacity,
                duration
            });

            // animate s6_block3 -> bot_text
            await gsap.to("#screen6 > #s6_block3 > .bot_text", {
                display: 'block',
                right: '283px',
                opacity,
                duration
            });

        }
    }

    let screen7 = {
        get parentDiv() {
            return $('#screen7');
        },

        show(isHome) {
            screen = '7';
            this.resetCss();
            screenShowHide('.screen:not(#screen7)', this.parentDiv);

            // hide screen13-popup1
            if($("#screen13-popup1").css('display') == "block") {
                $("#screen13-popup1").css({
                    display: 'none'
                });
            }

            // home button links to screen 7 without any animations
            if (isHome) {
                this.showHome();
            } else this.animateCss();
        },

        async showHome() {
            changeBottomLeftText(true);

            if(screen8.is8Viewed) $("#screen7 .s7img2").css('cursor', 'pointer');

            if(screen10.is10Viewed) $("#screen7 .s7img4").removeClass('disable').css('cursor', 'pointer');
            else $("#screen7 .s7img4").addClass('disable');
            
            if(screen15.is15Viewed) $("#screen7 .s7img8").removeClass('disable').css('cursor', 'pointer');
            else $("#screen7 .s7img8").addClass('disable');
            
            if(screen17.is17Viewed) $("#screen7 .s7img11").removeClass('disable').css('cursor', 'pointer');
            else $("#screen7 .s7img11").addClass('disable');
            
            if(screen21.is21Viewed) $("#screen7 .s7img14").removeClass('disable').css('cursor', 'pointer');
            else $("#screen7 .s7img14").addClass('disable');

            $("#screen7 > p.text1, #screen7 > .s6p_btn").css({
                display: "none"
            });

            // showing top and bottom nav
            $("#global_menu > .top_nav, #global_menu > .bottom_nav").css({
                display: 'flex',
                opacity: 1
            });

            disableBack();
            disableNext();
            disableHome();

            await gsap.to('.s7-block', {
                width: '100%',
                duration: 0
            });

            await gsap.to(`
                #screen7 .ospedale,  
                #screen7 .s7img1, 
                #screen7 .meeting-room, 
                #screen7 .s7img6,
                #screen7 .lab,
                #screen7 .s7img7,
                #screen7 .peer-review,
                #screen7 .s7img10,
                #screen7 .mercato,
                #screen7 .s7img13
            `, {
                scaleX: 1,
                scaleY: 1,
                duration: 0,
            });

            await gsap.to(`
                #screen7 .text2,
                #screen7 .text3,
                #screen7 .text4,
                #screen7 .text5,
                #screen7 .text6
            `, {
                scaleX: 1,
                duration: 0,
                onComplete: function () {
                    // images should navigate to different screens
                    function handleImageClick(e) {
                        e.stopImmediatePropagation();

                        let $image = $(this);
                        if ($image.is("#screen7 .ospedale")) {
                            if (screen8.is8Viewed) screen8.show();

                        } else if ($image.is("#screen7 .meeting-room")) {
                            if (screen10.is10Viewed) screen10.show();

                        } else if ($image.is("#screen7 .lab")) {
                            if (screen15.is15Viewed) screen15.show();

                        } else if ($image.is("#screen7 .peer-review")) {
                            if (screen17.is17Viewed) screen17.show();

                        } else if ($image.is("#screen7 .mercato")) {
                            if (screen21.is21Viewed) screen21.show();
                        }
                    }

                    $(`#screen7 .ospedale,
                        #screen7 .meeting-room,
                        #screen7 .lab,
                        #screen7 .peer-review,
                        #screen7 .mercato
                    `).one('click', handleImageClick);
                }
            });
        },

        // method for reseting all css to initial
        async resetCss() {

            // if(tween) tween.kill();
            // if(tween1) tween1.kill();
            // if(tween2) tween2.kill();
            // if(tween3) tween3.kill();
            // if(tween4) tween4.kill();
            // if(tween5) tween5.kill();
            // if(tween6) tween6.kill();
            // if(tween7) tween7.kill();
            // if(tween8) tween8.kill();
            // if(tween9) tween9.kill();
            gsap.killTweensOf('*');
            $('.s7-block').css({
                width: '50%',
            })

            tween = await gsap.to(`
                #screen7 .ospedale,  
                #screen7 .s7img1, 
                #screen7 .meeting-room, 
                #screen7 .s7img6,
                #screen7 .lab,
                #screen7 .s7img7,
                #screen7 .peer-review,
                #screen7 .s7img10,
                #screen7 .mercato,
                #screen7 .s7img13
            `, {
                scaleX: 0,
                scaleY: 0,
                duration: 0,
            })
            tween1 = await gsap.to(`
                #screen7 .text2,
                #screen7 .text3,
                #screen7 .text4,
                #screen7 .text5,
                #screen7 .text6
            `, {
                scaleX: 0,
                duration: 0,
            });

            $("#screen7 .text7, #screen7 .text8, #screen7 .text9, #screen7 .text10, #screen7 .text11")
                .css({
                    bottom: "120px",
                    opacity: 0
                });
        },

        //method for animating cureent screen
        async animateCss() {
            $("#screen7 > p.text1, #screen7 > .s6p_btn").css({
                display: "block"
            });

            $(`#screen7 .ospedale,  
                #screen7 .s7img2, 
                #screen7 .meeting-room, 
                #screen7 .s7img4,
                #screen7 .lab,
                #screen7 .s7img8,
                #screen7 .peer-review,
                #screen7 .s7img11,
                #screen7 .mercato,
                #screen7 .s7img14
            `).css({
                cursor: 'auto'
            });
            
            $("#screen7 .s6p_btn").on('click', e => {
                e.stopImmediatePropagation();
                screen8.show();
            });

            await gsap.to('.s7-block', {
                width: '100%',
                duration: 0.6
            });


            tween = await gsap.to("#screen7 .text2", {
                transformOrigin: "50% 50%",
                scaleX: 1,
                duration: 0.8,
            });

            tween1 = await gsap.to("#screen7 .ospedale, #screen7 .s7img1", {
                transformOrigin: "50% 50%",
                scaleX: 1,
                scaleY: 1,
                duration: 0.8,
            });

            // text goes here
            await gsap.to("#screen7 .text7", {
                opacity: 1,
                bottom: "180px",
                duration: 1
            });

            tween2 = await gsap.to("#screen7 .text3", {
                transformOrigin: "50% 50%",
                scaleX: 1,
                duration: 0.8,
            });

            tween3 = await gsap.to("#screen7 .meeting-room, #screen7 .s7img6", {
                transformOrigin: "50% 50%",
                scaleX: 1,
                scaleY: 1,
                duration: 0.8,
            });

            await gsap.to("#screen7 .text8", {
                opacity: 1,
                bottom: "210px",
                duration: 1
            })

            tween4 = await gsap.to("#screen7 .text4", {
                transformOrigin: "50% 50%",
                scaleX: 1,
                duration: 0.8,
            });

            tween5 = await gsap.to("#screen7 .lab, #screen7 .s7img7", {
                transformOrigin: "50% 50%",
                scaleX: 1,
                scaleY: 1,
                duration: 0.8,
            });

            await gsap.to("#screen7 .text9", {
                opacity: 1,
                bottom: "180px",
                duration: 1
            });

            tween6 = await gsap.to("#screen7 .text5", {
                transformOrigin: "50% 50%",
                scaleX: 1,
                duration: 0.8,
            });

            tween7 = await gsap.to("#screen7 .peer-review, #screen7 .s7img10", {
                transformOrigin: "50% 50%",
                scaleX: 1,
                scaleY: 1,
                duration: 0.8,
            });

            await gsap.to("#screen7 .text10", {
                opacity: 1,
                bottom: "210px",
                duration: 1
            })

            tween8 = await gsap.to("#screen7 .text6", {
                transformOrigin: "50% 50%",
                scaleX: 1,
                duration: 0.8,
            });

            tween9 = await gsap.to("#screen7 .mercato, #screen7 .s7img13", {
                transformOrigin: "50% 50%",
                scaleX: 1,
                scaleY: 1,
                duration: 0.8,
            });

            await gsap.to("#screen7 .text11", {
                opacity: 1,
                bottom: "210px",
                duration: 1
            });

            enableNext();
        }
    }

    let screen8 = {
        get parentDiv() {
            return $("#screen8");
        },

        is8Viewed: false,

        show() {
            screen = '8';
            this.resetCss();
            screenShowHide(".screen:not(#screen8)", this.parentDiv);
            this.animateCss();
            this.is8Viewed = true;

            // event listener for three doctors
            function handleDoctorClick(e) {
                e.stopImmediatePropagation();
                if ($(this).is('.s8img1')) {
                    screen9.show();
                } else if ($(this).is('.s8img2')) {
                    screen9a.show();
                } else if ($(this).is('.s8img3')) {
                    screen9b.show();
                }
            }

            $("#screen8 .s8img1, #screen8 .s8img2, #screen8 .s8img3").on('click', handleDoctorClick);

            // hover event listener for three doctors
            function handleDoctorHoverIn(e) {
                e.stopImmediatePropagation();
                let $doctor = $(this);
                if ($doctor.is('.s8img1')) {
                    $(".s8img1_hover").css('display', 'block');
                } else if ($doctor.is('.s8img2')) {
                    $(".s8img2_hover").css('display', 'block');
                } else if ($doctor.is('.s8img3')) {
                    $(".s8img3_hover").css('display', 'block');
                }
            }

            function handleDoctorHoverOut(e) {
                e.stopImmediatePropagation();
                let $doctor = $(this);
                if ($doctor.is('.s8img1')) {
                    $(".s8img1_hover").css('display', 'none');
                } else if ($doctor.is('.s8img2')) {
                    $(".s8img2_hover").css('display', 'none');
                } else if ($doctor.is('.s8img3')) {
                    $(".s8img3_hover").css('display', 'none');
                }
            }

            $("#screen8 .s8img1, #screen8 .s8img2, #screen8 .s8img3").hover(handleDoctorHoverIn, handleDoctorHoverOut);
        },

        // method for reseting all css to initial
        async resetCss() {
            console.log('resetCss');
            gsap.killTweensOf('*');
            if (timeout) clearTimeout(timeout);
            timeout = null;

            disableBack();
            disableNext();

            enableBack();
            enableNext(); // enable next only if next screen is already visited

            changeBottomLeftText();

            // reset top and bottom nav
            $("#global_menu *").each((i, elem) => {
                elem.removeAttribute('style');
            });

            $("#global_menu > .top_nav, #global_menu > .bottom_nav").css({
                opacity: 1
            });

            //verifying whether all popups across 9, 9a and 9b have been opened
            let visitedPopupsCount = 0;
            $("#screen9, #screen9a, #screen9b").each((i, elem) => {
                let $popup = $(elem);
                visitedPopupsCount += $popup.find('.p-click.popup-visited').length;
            });
            console.log(visitedPopupsCount);
            if (visitedPopupsCount == 13) {
                enableNext(true); // will enable next by force
            } else {
                enableNext(); // will enable next only if next screen is visited previously
            }

            $("#screen8 .text-1").css({
                right: '-410px'
            });
        },

        // method for animating cureent screen
        async animateCss() {
            let isViewed = this.is8Viewed;

            animQueue = await $("#screen8 .text-1").animate({
                right: '230px'
            }, isViewed ? 0 : 400).promise();
        }
    }

    let screen9 = {
        get parentDiv() {
            return $("#screen9");
        },

        is9aViewed: false,

        show() {
            screen = '9';
            this.resetCss();
            screenShowHide(".screen:not(#screen9)", this.parentDiv);
            this.animateCss();

            this.is9aViewed = true;

            $("#screen9 .p-click").on('mouseover', function (e) {
                e.stopImmediatePropagation();
                $(this).addClass('active');
                $(this).find('.p-subtext, .p-image').addClass('active');
            });
            $("#screen9 .p-click").on('mouseout', function (e) {
                e.stopImmediatePropagation();
                $(this).removeClass('active');
                $(this).find('.p-subtext, .p-image').removeClass('active');
            });

            // click event listener for 4 options
            function handlePClick(e) {
                e.stopImmediatePropagation();
                let popupBtn = `#screen9 #${$(this).attr('id')}`;
                let popup = `#screen9 #${$(this).attr('target')}`;

                $(popupBtn).addClass('popup-visited');
                let visitedPopupsCount = 0;
                $("#screen9 .p-click").each((i, elem) => {
                    if ($(elem).hasClass('popup-visited')) visitedPopupsCount++;
                });

                if (visitedPopupsCount == $("#screen9 .p-click").length) $(".s8img1_active").css('display', 'block');

                // highlighting visited popup btn image
                $(`${popupBtn} .p-image`).addClass('done');

                handleOpenPopup({
                    popupBtn: popupBtn,
                    popup: popup,
                    contentToHide: `
                        #screen9 > .s9_character,
                        #screen9 > .s9_block1,
                        #screen9 > #s9_block3 > .ptext-1,
                        #screen9 > #s9_block3 > .p-click,
                        #screen9 > #s9_block3 > .s9p_btn
                    `
                });
            }

            async function handleOpenPopup(options) {
                let {
                    popupBtn,
                    popup,
                    contentToHide
                } = options;
                console.log(popupBtn);
                console.log(popup);
                console.log(contentToHide);

                let originalPopupBtnPosition = $(popupBtn).css('top');
                // let popupLineMaxHeight = $(`${popup} > .s9p1-line`).css('height');

                // setting css for popup contents
                $(contentToHide).css('display', 'none');
                $(popup).css('display', 'block');
                $(`${popup} > .s9-character`).css('display', 'block');
                $(`${popup} > .s9_block1`).css('top', originalPopupBtnPosition);
                $(`${popup} > .s9p1-line`).css('height', '0px');
                $(`${popup} > .popup-content`).css({
                    display: 'none',
                    opacity: 0
                });
                $(`${popup} > .s9_bottombtn`).css({
                    display: 'none',
                    opacity: 0
                });

                // animating all properties
                await gsap.to(`${popup} > .s9_block1`, {
                    top: '226px',
                    duration: 0.8
                });

                await gsap.to(`${popup} > .s9p1-line`, {
                    // height: popupLineMaxHeight,
                    height: '389px',
                    duration: 0.8
                });

                await gsap.to(`${popup} > .popup-content`, {
                    display: 'block',
                    opacity: 1,
                    duration: 0.8
                });

                await gsap.to(`${popup} > .s9_bottombtn`, {
                    display: 'flex',
                    opacity: 1,
                    delay: 1, // change this proeprty later to reflect what is mentioned in attribute of popup btn
                    duration: 0.4,
                    onComplete: function () {
                        $(`${popup} > .s9_bottombtn`).one('click', function () {
                            $(popup).css('display', 'none');
                            $(contentToHide).css('display', 'block');
                            $("#screen9 .p-click").css('display', 'flex');
                        })
                    }
                });
            }

            $("#screen9 .p-click").on('click', handlePClick);

            // screen9 s9p_btn click handler
            $("#screen9 .s9p_btn").on('click', (e) => {
                e.stopImmediatePropagation();
                screen8.show();
            })
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            disableNext();

            changeBottomLeftText();
            // enableNext(); // will enable next only if next screen is visited previously

            // hiding popups
            $("#screen9 .screen9-popup").css({
                display: 'none',
                // opacity: 0
            });

            // re-setting z-index for all relevant elements
            $(".s9_lungs, .s9_block1, .s9_block3 .ptext-1").css('z-index', -1);

            // resetting positioning and display of all contents of screen 9
            $("#s9_block3 .ptext-1, #s9_block3 .p-click, #s9_block3 .s9p_btn").css({
                display: 'none',
                opacity: 0,
            });

            $("#s9_block3 .p-click, #s9_block3 .s9p_btn").css('pointer-events', 'none');

            $("#screen9 .s9_block1").css({
                opacity: 0
            })

            $("#s9_block3 #p-click1").css({
                top: '569px',
                // top: '475px',
            });

            $("#s9_block3 #p-click2").css({
                top: '665px',
                // top: '569px',
            });

            $("#s9_block3 #p-click3").css({
                top: '758px',
                // top: '664px',
            });

            $("#s9_block3 #p-click4").css({
                top: '855px',
                // top: '759px',
            });

            $("#s9_block3 #end-txt").css({
                right: '-480px',
                // right: '215px'
            })
        },

        async animateCss() {
            $(".s9_lungs, .s9_block1, #s9_block3 .ptext-1").css('z-index', 5);

            let isVisited = this.is9aViewed;

            timeout = setTimeout(async () => {
                $("#screen9 > .s9_character").css('display', 'block');

                await gsap.fromTo("#screen9 .s9_block1", {
                    scaleX: 0,
                    scaleY: 0,
                    opacity: 0
                }, {
                    transformOrigin: "50% 50%",
                    scaleX: 1,
                    scaleY: 1,
                    opacity: 1,
                    duration: isVisited ? 0 : 0.4
                });

                await gsap.to("#s9_block3 .ptext-1", {
                    display: 'block',
                    opacity: 1,
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9_block3 #p-click1", {
                    display: 'flex',
                    opacity: 1,
                    top: '475px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9_block3 #p-click2", {
                    display: 'flex',
                    opacity: 1,
                    top: '569px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9_block3 #p-click3", {
                    display: 'flex',
                    opacity: 1,
                    top: '664px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9_block3 #p-click4", {
                    display: 'flex',
                    opacity: 1,
                    top: '759px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9_block3 .s9p_btn", {
                    display: 'block',
                    opacity: 1,
                    duration: isVisited ? 0 : 0.4
                });

                await gsap.to("#s9_block3 #end-txt", {
                    right: '215px',
                    duration: isVisited ? 0 : 0.4,
                    onComplete: function () {
                        $("#s9_block3 .p-click, #s9_block3 .s9p_btn").css('pointer-events', 'auto');
                    }
                });
            }, isVisited ? 0 : 1000);
        }
    }

    let screen9a = {
        get parentDiv() {
            return $("#screen9a");
        },

        is9aViewed: false,

        show() {
            screen = '9a';
            this.resetCss();
            screenShowHide(".screen:not(#screen9a)", this.parentDiv);
            this.animateCss();
            this.is9aViewed = true;

            $("#screen9a .p-click").on('mouseover', function (e) {
                e.stopImmediatePropagation();
                $(this).addClass('active');
                $(this).find('.p-subtext, .p-image').addClass('active');
            });
            $("#screen9a .p-click").on('mouseout', function (e) {
                e.stopImmediatePropagation();
                $(this).removeClass('active');
                $(this).find('.p-subtext, .p-image').removeClass('active');
            });

            // click event listener for 4 options
            function handlePClick(e) {
                e.stopImmediatePropagation();
                let popupBtn = `#screen9a #${$(this).attr('id')}`;
                let popup = `#screen9a #${$(this).attr('target')}`;

                $(popupBtn).addClass('popup-visited');
                let visitedPopupsCount = 0;
                $("#screen9a .p-click").each((i, elem) => {
                    if ($(elem).hasClass('popup-visited')) visitedPopupsCount++;
                })

                if (visitedPopupsCount == $("#screen9a .p-click").length) $(".s8img2_active").css('display', 'block');

                // highlighting visited popup btn image
                $(`${popupBtn} .p-image`).addClass('done');

                handleOpenPopup({
                    popupBtn: popupBtn,
                    popup: popup,
                    contentToHide: `
                        #screen9a > .s9a_content > .s9a_character,
                        #screen9a > .s9a_content > .s9a_block1,
                        #screen9a > .s9a_content > #s9a_block3 > .ptext-1,
                        #screen9a > .s9a_content > #s9a_block3 > .p-click,
                        #screen9a > .s9a_content > #s9a_block3 > .s9ap_btn
                    `
                });
            }

            async function handleOpenPopup(options) {
                let {
                    popupBtn,
                    popup,
                    contentToHide
                } = options;
                console.log(popupBtn);
                console.log(popup);
                console.log(contentToHide);

                let originalPopupBtnPosition = $(popupBtn).css('top');
                // let popupLineMaxHeight = $(`${popup} > .s9p1-line`).css('height');

                // setting css for popup contents
                $(contentToHide).css('display', 'none');
                $(popup).css('display', 'block');
                $(`${popup} > .s9a-character`).css('display', 'block');
                $(`${popup} > .s9a_block1`).css('top', originalPopupBtnPosition);
                $(`${popup} > .s9ap1-line`).css('height', '0px');
                $(`${popup} > .popup-content`).css({
                    display: 'none',
                    opacity: 0
                });
                $(`${popup} > .s9a_bottombtn`).css({
                    display: 'none',
                    opacity: 0
                });

                // animating all properties
                await gsap.to(`${popup} > .s9a_block1`, {
                    top: '226px',
                    duration: 0.8
                });

                await gsap.to(`${popup} > .s9ap1-line`, {
                    // height: popupLineMaxHeight,
                    height: $(popup).is($("#screen9a-popup2")) ? "460px" : '389px',
                    duration: 0.8
                });

                await gsap.to(`${popup} > .popup-content`, {
                    display: 'block',
                    opacity: 1,
                    duration: 0.8
                });

                await gsap.to(`${popup} > .s9a_bottombtn`, {
                    display: 'flex',
                    opacity: 1,
                    delay: 1, // change this proeprty later to reflect what is mentioned in attribute of popup btn
                    duration: 0.4,
                    onComplete: function () {
                        $(`${popup} > .s9a_bottombtn`).one('click', function () {
                            $(popup).css('display', 'none');
                            $(contentToHide).css('display', 'block');
                            $("#screen9a .p-click").css('display', 'flex');
                        })
                    }
                });
            }

            $("#screen9a .p-click").on('click', handlePClick);

            // screen9 s9p_btn click handler
            $("#screen9a .s9ap_btn").on('click', (e) => {
                e.stopImmediatePropagation();
                screen8.show();
            })
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            disableNext();

            changeBottomLeftText();

            // enableNext(); // will enable next only if next screen is visited previously

            // hiding popups
            $("#screen9a .screen9a-popup").css({
                display: 'none',
                // opacity: 0
            });

            // re-setting z-index for all relevant elements
            $(".s9a_lungs, .s9a_block1, .s9a_block3 .ptext-1").css('z-index', -1);

            // resetting positioning and display of all contents of screen 9
            $("#s9a_block3 .ptext-1, #s9a_block3 .p-click, #s9a_block3 .s9ap_btn").css({
                display: 'none',
                opacity: 0,
            });

            $("#s9a_block3 .p-click, #s9a_block3 .s9ap_btn").css('pointer-events', 'none');

            $("#screen9a .s9a_block1").css({
                opacity: 0
            })

            $("#s9a_block3 #p-click1").css({
                top: '569px',
                // top: '475px',
            });

            $("#s9a_block3 #p-click2").css({
                top: '665px',
                // top: '569px',
            });

            $("#s9a_block3 #p-click3").css({
                top: '758px',
                // top: '664px',
            });

            $("#s9a_block3 #p-click4").css({
                top: '855px',
                // top: '759px',
            });

            $("#s9a_block3 #end-txt").css({
                right: '-480px',
                // right: '215px'
            })
        },

        async animateCss() {
            $(".s9a_lungs, .s9a_block1, #s9a_block3 .ptext-1").css('z-index', 5);

            $("#screen9a > .s9a_content > .s9a_character").css('display', 'block');

            let isVisited = this.is9aViewed;

            timeout = setTimeout(async () => {
                await gsap.fromTo("#screen9a .s9a_block1", {
                    scaleX: 0,
                    scaleY: 0,
                    opacity: 0
                }, {
                    transformOrigin: "50% 50%",
                    scaleX: 1,
                    scaleY: 1,
                    opacity: 1,
                    duration: isVisited ? 0 : 0.4
                });

                await gsap.to("#s9a_block3 .ptext-1", {
                    display: 'block',
                    opacity: 1,
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9a_block3 #p-click1", {
                    display: 'flex',
                    opacity: 1,
                    top: '475px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9a_block3 #p-click2", {
                    display: 'flex',
                    opacity: 1,
                    top: '569px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9a_block3 #p-click3", {
                    display: 'flex',
                    opacity: 1,
                    top: '664px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9a_block3 .s9ap_btn", {
                    display: 'block',
                    opacity: 1,
                    duration: isVisited ? 0 : 0.4
                });

                await gsap.to("#s9a_block3 #end-txt", {
                    right: '215px',
                    duration: isVisited ? 0 : 0.4,
                    onComplete: function () {
                        $("#s9a_block3 .p-click, #s9a_block3 .s9ap_btn").css('pointer-events', 'auto');
                    }
                });
            }, isVisited ? 0 : 1000);
        }
    }

    let screen9b = {
        get parentDiv() {
            return $("#screen9b");
        },

        is9bViewed: false,

        show() {
            screen = '9b';
            this.resetCss();
            screenShowHide(".screen:not(#screen9b)", this.parentDiv);
            this.animateCss();
            this.is9bViewed = true;

            $("#screen9b .p-click").on('mouseover', function (e) {
                e.stopImmediatePropagation();
                $(this).addClass('active');
                $(this).find('.p-subtext, .p-image').addClass('active');
            });
            $("#screen9b .p-click").on('mouseout', function (e) {
                e.stopImmediatePropagation();
                $(this).removeClass('active');
                $(this).find('.p-subtext, .p-image').removeClass('active');
            });

            // click event listener for 4 options
            function handlePClick(e) {
                e.stopImmediatePropagation();
                let popupBtn = `#screen9b #${$(this).attr('id')}`;
                let popup = `#screen9b #${$(this).attr('target')}`;

                $(popupBtn).addClass('popup-visited');
                let visitedPopupsCount = 0;
                $("#screen9b .p-click").each((i, elem) => {
                    if ($(elem).hasClass('popup-visited')) visitedPopupsCount++;
                });

                if (visitedPopupsCount == $("#screen9b .p-click").length) $(".s8img3_active").css('display', 'block');

                // highlighting visited popup btn image
                $(`${popupBtn} .p-image`).addClass('done');

                handleOpenPopup({
                    popupBtn: popupBtn,
                    popup: popup,
                    contentToHide: `
                        #screen9b > .s9b_content > .s9b_character,
                        #screen9b > .s9b_content > .s9b_block1,
                        #screen9b > .s9b_content > #s9b_block3 > .ptext-1,
                        #screen9b > .s9b_content > #s9b_block3 > .p-click,
                        #screen9b > .s9b_content > #s9b_block3 > .s9bp_btn
                    `
                });
            }

            async function handleOpenPopup(options) {
                let {
                    popupBtn,
                    popup,
                    contentToHide
                } = options;
                console.log(popupBtn);
                console.log(popup);
                console.log(contentToHide);

                // to hide lung for first popup
                if (popup == "#screen9b #screen9b-popup1") {
                    contentToHide += `, #screen9b > .s9b_lungs`;
                }

                let originalPopupBtnPosition = $(popupBtn).css('top');
                // let popupLineMaxHeight = $(`${popup} > .s9p1-line`).css('height');

                let popupLineHeightObject = {
                    "#screen9b #screen9b-popup1": "545px",
                    "#screen9b #screen9b-popup2": "480px",
                    "#screen9b #screen9b-popup3": "470px",
                    "#screen9b #screen9b-popup4": "387px",
                    "#screen9b #screen9b-popup5": "388px",
                    "#screen9b #screen9b-popup6": "387px"
                }

                // setting css for popup contents
                $(contentToHide).css('display', 'none');
                $(popup).css('display', 'block');
                $(`${popup} > .s9b-character`).css('display', 'block');
                $(`${popup} > .s9b_block1`).css('top', originalPopupBtnPosition);
                $(`${popup} > .s9bp1-line`).css('height', '0px');
                $(`${popup} > .popup-content`).css({
                    display: 'none',
                    opacity: 0
                });
                $(`${popup} > .s9b_bottombtn`).css({
                    display: 'none',
                    opacity: 0
                });

                // animating all properties
                await gsap.to(`${popup} > .s9b_block1`, {
                    top: '226px',
                    // delay: 0.5,
                    duration: 0.8
                });

                await gsap.to(`${popup} > .s9bp1-line`, {
                    // height: popupLineMaxHeight,
                    height: popupLineHeightObject[popup],
                    duration: 0.8
                });

                await gsap.to(`${popup} > .popup-content`, {
                    display: 'block',
                    opacity: 1,
                    duration: 0.8
                });

                await gsap.to(`${popup} > .s9b_bottombtn`, {
                    display: 'flex',
                    opacity: 1,
                    delay: 1, // change this proeprty later to reflect what is mentioned in attribute of popup btn
                    duration: 0.4,
                    onComplete: function () {
                        $(`${popup} > .s9b_bottombtn`).one('click', function () {
                            $(popup).css('display', 'none');
                            $(contentToHide).css('display', 'block');
                            $("#screen9b .p-click").css('display', 'flex');
                        })
                    }
                });
            }

            $("#screen9b .p-click").on('click', handlePClick);

            // screen9 s9p_btn click handler
            $("#screen9b .s9bp_btn").on('click', (e) => {
                e.stopImmediatePropagation();
                screen8.show();
            })
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            disableNext();

            changeBottomLeftText();

            // hiding popups
            $("#screen9b .screen9b-popup").css({
                display: 'none',
                // opacity: 0
            });

            // re-setting z-index for all relevant elements
            $(".s9b_lungs, .s9b_block1, .s9b_block3 .ptext-1").css('z-index', -1);

            // resetting positioning and display of all contents of screen 9
            $("#s9b_block3 .ptext-1, #s9b_block3 .p-click, #s9b_block3 .s9bp_btn").css({
                display: 'none',
                opacity: 0,
            });

            $("#s9b_block3 .p-click, #s9b_block3 .s9bp_btn").css('pointer-events', 'none');

            $("#screen9b .s9b_block1").css({
                opacity: 0
            })

            $("#s9b_block3 #p-click1").css({
                top: '425px',
                // top: '325px',
            });

            $("#s9b_block3 #p-click2").css({
                top: '514px',
                // top: '414px',
            });

            $("#s9b_block3 #p-click3").css({
                top: '604px',
                // top: '504px',
            });

            $("#s9b_block3 #p-click4").css({
                top: '693px',
                // top: '593px',
            });

            $("#s9b_block3 #p-click5").css({
                top: '784px',
                // top: '684px',
            });

            $("#s9b_block3 #p-click5").css({
                top: '873px',
                // top: '773px',
            });

            $("#s9b_block3 #end-txt").css({
                right: '-480px',
                // right: '215px'
            });
        },

        async animateCss() {
            $(".s9b_lungs, .s9b_block1, #s9b_block3 .ptext-1").css('z-index', 5);

            $(".s9b_lungs").css('display', 'block');
            $("#screen9b > .s9b_content > .s9b_character").css("display", "block");

            let isVisited = this.is9bViewed;

            timeout = setTimeout(async () => {
                await gsap.fromTo("#screen9b .s9b_block1", {
                    scaleX: 0,
                    scaleY: 0,
                    opacity: 0
                }, {
                    transformOrigin: "50% 50%",
                    scaleX: 1,
                    scaleY: 1,
                    opacity: 1,
                    duration: isVisited ? 0 : 0.4
                });

                await gsap.to("#s9b_block3 .ptext-1", {
                    display: 'block',
                    opacity: 1,
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9b_block3 #p-click1", {
                    display: 'flex',
                    opacity: 1,
                    top: '325px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9b_block3 #p-click2", {
                    display: 'flex',
                    opacity: 1,
                    top: '414px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9b_block3 #p-click3", {
                    display: 'flex',
                    opacity: 1,
                    top: '504px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9b_block3 #p-click4", {
                    display: 'flex',
                    opacity: 1,
                    top: '593px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9b_block3 #p-click5", {
                    display: 'flex',
                    opacity: 1,
                    top: '684px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9b_block3 #p-click6", {
                    display: 'flex',
                    opacity: 1,
                    top: '773px',
                    duration: isVisited ? 0 : 0.8
                });

                await gsap.to("#s9b_block3 .s9bp_btn", {
                    display: 'block',
                    opacity: 1,
                    duration: isVisited ? 0 : 0.4
                });

                await gsap.to("#s9b_block3 #end-txt", {
                    right: '215px',
                    duration: isVisited ? 0 : 0.4,
                    onComplete: function () {
                        $("#s9b_block3 .p-click, #s9b_block3 .s9bp_btn").css('pointer-events', 'auto');
                    }
                });
            }, isVisited ? 0 : 1000);
        }
    }

    let screen10 = {
        get parentDiv() {
            return $("#screen10");
        },

        is10Viewed: false,

        show() {
            screen = '10';
            this.resetCss();
            screenShowHide(".screen:not(#screen10)", this.parentDiv);
            this.animateCss();
            this.is10Viewed = true;
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableBack();
            disableNext();

            enableBack();
            enableNext(); // will enable next only if next screen is visited previously

            // resetting character
            $("#screen10 > .s10_character").css({
                right: '-540px'
                // right: '-150px'
            });

            // resetting top light
            $("#screen10 > .s10-box1").css({
                top: '-100px'
                // top: '0px'
            });

            // resetting bottom plant
            $("#screen10 > .s10-box2").css({
                bottom: '-100px'
                // top: '0px'
            });

            // resetting heading 
            await gsap.to("#screen10 > .s10-box3, #screen10 > .s10-text1", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            // resetting blue images
            await gsap.to(`
                #screen10 > .blue_images > .s10_img1,
                #screen10 > .blue_images > .s10_img2,
                #screen10 > .blue_images > .s10_img3,
                #screen10 > .blue_images > .s10_img4
            `, {
                scaleX: 0.5,
                scaleY: 0.5,
                duration: 0
            });

            // resetting texts
            // top left, top right
            $(`#screen10 > .s19-text_block > .s10-text2,
                #screen10 > .s19-text_block > .s10-text5
            `).css({
                top: '403px'
                // top: '353px'
            });

            // bottom left
            $("#screen10 > .s19-text_block > .s10-text3").css({
                top: '652px'
                // top: '602px'
            });
            $("#screen10 > .s19-text_block > .s10-text4").css({
                top: '658px'
                // top: '628px'
            });

            // bottom right
            $("#screen10 > .s19-text_block > .s10-text6").css({
                top: '655px'
                // top: '605px'
            });
            $("#screen10 > .s19-text_block > .s10-text7").css({
                top: '713px'
                // top: '663px'
            });
            $("#screen10 > .s19-text_block > .s10-text8").css({
                top: '773px'
                // top: '723px'
            });

        },

        async animateCss() {
            let duration = 0.8;
            // animating top light
            gsap.to("#screen10 > .s10-box1", {
                top: '0px',
                duration
            })

            // animating bottom plant
            gsap.to("#screen10 > .s10-box2", {
                bottom: '0px',
                duration
            })

            // animating character
            gsap.to("#screen10 > .s10_character", {
                right: '-150px',
                duration
            });

            // animating heading
            gsap.to("#screen10 > .s10-box3, #screen10 > .s10-text1", {
                scaleX: 1,
                scaleY: 1,
                duration
            });

            // animating blue images
            gsap.to(`
                #screen10 > .blue_images > .s10_img1,
                #screen10 > .blue_images > .s10_img2,
                #screen10 > .blue_images > .s10_img3,
                #screen10 > .blue_images > .s10_img4
            `, {
                scaleX: 1,
                scaleY: 1,
                duration
            });

            // animating texts
            // top left, top right
            gsap.to(`
                #screen10 > .s19-text_block > .s10-text2,
                #screen10 > .s19-text_block > .s10-text5
            `, {
                top: '353px',
                duration
            });

            // bottom left
            gsap.to("#screen10 > .s19-text_block > .s10-text3", {
                top: '602px',
                duration
            });
            gsap.to("#screen10 > .s19-text_block > .s10-text4", {
                top: '628px',
                duration
            });

            // bottom right
            gsap.to("#screen10 > .s19-text_block > .s10-text6", {
                top: '605px',
                duration
            });
            gsap.to("#screen10 > .s19-text_block > .s10-text7", {
                top: '663px',
                duration
            });
            gsap.to("#screen10 > .s19-text_block > .s10-text8", {
                top: '723px',
                duration,
                onComplete: function () {
                    enableNext(true);
                }
            })
        }
    }

    let screen11 = {
        get parentDiv() {
            return $("#screen11");
        },

        show() {
            screen = '11';
            this.resetCss();
            screenShowHide(".screen:not(#screen11)", this.parentDiv);
            this.animateCss();

            function handleBtnClick(e) {
                e.stopImmediatePropagation();
                screen12.show();
            }
            $("#screen11 > .s11_btn").on('click', handleBtnClick)
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableNext();
            enableNext(); // will enable next only if next screen is visited previously

            // resetting character
            $("#screen11 > .s11_character").css({
                left: '-570px'
                // left: '81px'
            });

            // resetting lungs
            $("#screen11 > .s11_lungs").css({
                opacity: 0
            })

            // resetting white background
            $("#screen11 > .s11_mid_pop > .center_div").css({
                width: '1000px'
                // width: '1290px',
            });

            // resetting heading box scale
            await gsap.to("#screen11 > .s11_block1", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            // resetting heading text
            $("#screen11 > .s11_block1 > .s11_text1, #screen11 > .s11_block1 > .s11_text2").css({
                opacity: 0
            });

            // resetting middle-text
            $("#screen11 > .centertext").css({
                opacity: 0
            });

            // resetting middle-btn
            $("#screen11 > .s11_btn").css({
                opacity: 0
            });
        },

        async animateCss() {
            // animating character
            let duration = 0.8;
            gsap.to("#screen11 > .s11_character", {
                left: '81px',
                duration
            });

            // animating lungs
            gsap.to("#screen11 > .s11_lungs", {
                opacity: 1,
                duration
            });

            // animating white background
            await gsap.to("#screen11 > .s11_mid_pop > .center_div", {
                width: '1290px',
                duration
            });

            // animating heading box scale
            await gsap.to("#screen11 > .s11_block1", {
                scaleX: 1,
                scaleY: 1,
                duration
            });

            // animating heading text
            await gsap.to("#screen11 > .s11_block1 > .s11_text1", {
                opacity: 1,
                duration
            });

            await gsap.to("#screen11 > .s11_block1 > .s11_text2", {
                opacity: 1,
                duration
            });

            // animating center-text
            await gsap.to("#screen11 > .centertext", {
                opacity: 1,
                delay: 2,
                duration
            });

            // animating center-btn
            await gsap.to("#screen11 > .s11_btn", {
                opacity: 1,
                duration,
                onComplete: function () {
                    enableNext(true);
                }
            })
        }
    }

    let screen12 = {
        get parentDiv() {
            return $("#screen12");
        },

        show() {
            screen = '12';
            this.resetCss();
            screenShowHide(".screen:not(#screen12)", this.parentDiv);
            this.animateCss();
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            disableNext();
            disableBack();
            // $("#back_btn,#next_btn").css({
            //     display: 'none'
            // });

            $("#global_menu > .top_nav, #global_menu > .bottom_nav").css({
                display: 'none'
            });

            // resetting text
            $("#screen12 > p").css({
                left: '-21%'
                // left: '50%'
            });

            // resetting plane and smoke
            $("#screen12 > .planeanim").css({
                left: '-46%'
                // left: '150%'
            })
        },

        async animateCss() {
            gsap.to("#screen12 > .planeanim", {
                left: '150%',
                duration: 5,
            });

            gsap.to("#screen12 > p", {
                left: '50%',
                ease: 'power1.out',
                delay: 0.3,
                duration: 2,
                onComplete: function () {
                    setTimeout(() => {
                        screen13.show();
                    }, 5000);
                }
            });
        }
    }

    let screen13 = {
        get parentDiv() {
            return $("#screen13");
        },

        show() {
            screen = '13';
            this.resetCss();
            screenShowHide(".screen:not(#screen13)", this.parentDiv);
            this.animateCss();

            $("#screen13 .p-click").on('mouseover', function (e) {
                e.stopImmediatePropagation();
                $(this).addClass('active');
                $(this).find('.p-subtext, .p-image').addClass('active');
            });
            $("#screen13 .p-click").on('mouseout', function (e) {
                e.stopImmediatePropagation();
                $(this).removeClass('active');
                $(this).find('.p-subtext, .p-image').removeClass('active');
            });

            // click event listener for 4 options
            function handlePClick(e) {
                e.stopImmediatePropagation();
                let popupBtn = `#screen13 #${$(this).attr('id')}`;
                let popup = `#${$(this).attr('target')}`;

                // highlighting visited popup btn image
                $(`${popupBtn} .p-image`).addClass('done');

                handleOpenPopup({
                    popupBtn: popupBtn,
                    popup: popup,
                    contentToHide: `
                        #screen13 > .s13_character,
                        #screen13 > .s13_block1,
                        #screen13 > #s6_block3 > .p-click,
                        #screen13 > .s13_block1 > .text1
                    `
                });
            }

            async function handleOpenPopup(options) {
                let {
                    popupBtn,
                    popup,
                    contentToHide
                } = options;
                console.log(popupBtn);
                console.log(popup);
                console.log(contentToHide);

                let originalPopupBtnPosition = $(popupBtn).css('top');
                // let popupLineMaxHeight = $(`${popup} > .s9p1-line`).css('height');

                let popupLineHeightObject = {
                    "#screen13-popup1": "306px",
                }

                // setting css for popup contents
                $(contentToHide).css('display', 'none');
                $(popup).css('display', 'block');
                $(`${popup} > .s13-character`).css('display', 'block');
                $(`${popup} > .s13_block1`).css('top', originalPopupBtnPosition);
                $(`${popup} > .s9p1-line`).css('height', '0px');
                $(`${popup} > .popup-content`).css({
                    display: 'none',
                    opacity: 0
                });
                $(`${popup} > .s13_bottombtn`).css({
                    display: 'none',
                    opacity: 0
                });

                // animating all properties
                await gsap.to(`${popup} > .s13_block1`, {
                    top: '226px',
                    // delay: 0.5,
                    duration: 0.8
                });

                await gsap.to(`${popup} > .s9p1-line`, {
                    // height: popupLineMaxHeight,
                    height: popupLineHeightObject[popup],
                    duration: 0.8
                });

                await gsap.to(`${popup} > .popup-content`, {
                    display: 'block',
                    opacity: 1,
                    duration: 0.8
                });

                await gsap.to(`${popup} > .s13_bottombtn`, {
                    display: 'flex',
                    opacity: 1,
                    delay: 1, // change this proeprty later to reflect what is mentioned in attribute of popup btn
                    duration: 0.4,
                    onComplete: function () {
                        $(`${popup} > .s13_bottombtn`).one('click', async function () {
                            $(popup).css('display', 'none');
                            $(contentToHide).css('display', 'block');
                            $("#screen13 #p-click1").css('display', 'flex');
                            if ($("#screen13 #p-click2").css('opacity') == 0) {
                                $("#screen13 #p-click2").css({
                                    display: 'none'
                                });

                                await gsap.to("#screen13 > #s6_block3 > #p-click2", {
                                    display: 'flex',
                                    opacity: 1,
                                    top: '486px',
                                    duration: 0.8,
                                    onComplete: function () {
                                        enableNext(true); // enable next button
                                        $("#screen13 #p-click2").on('click', (e) => {
                                            e.stopImmediatePropagation();
                                            screen14.show();
                                        })
                                    }
                                });
                            } else {
                                $("#screen13 #p-click2").css({
                                    display: 'flex'
                                });
                            }
                        })
                    }
                });
            }

            $("#screen13 #p-click1").on('click', handlePClick);
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableNext();
            enableNext(); // enable next only if next screen is already visited
            enableBack();

            $("#screen13-popup1").css({
                display: 'none'
            })

            $("#global_menu > .top_nav, #global_menu > .bottom_nav").css({
                display: 'flex'
            });

            // resetting center div
            $("#screen13 > .s13_mid_pop > .center_div").css({
                width: '100px'
                // width: '1290px'
            });

            // resetting character
            $("#screen13 > .s13_character").css({
                left: '-524px'
                // left: '115px'
            });

            // resetting lungs
            $("#screen13 > .s13_lungs").css({
                opacity: 0
            });

            // resetting head block
            await gsap.to("#screen13 > .s13_block1", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            // resetting head block text
            $("#screen13 > .s13_block1 > .text1, #screen13 > .s13_block1 > .text2").css({
                opacity: 0
            });

            // resetting p-click1
            $("#screen13 > #s6_block3 > #p-click1").css({
                display: 'none',
                opacity: 0,
                top: '420px'
                // top: '396px'
            });

            // resetting bottom text
            $("#screen13 > #s6_block3 > .bot_text").css({
                opacity: 0,
                right: '-100px'
                // right: '283px'
            })

            // resetting p-click2
            $("#screen13 > #s6_block3 > #p-click2").css({
                display: 'none',
                opacity: 0,
                top: '510px'
                // top: '486px'
            });

        },

        async animateCss() {
            let duration = 0.8;

            await gsap.to("#screen13 > .s13_mid_pop > .center_div", {
                width: '1290px',
                // duration: 0.4
                duration
            });

            await gsap.to("#screen13 > .s13_character", {
                display: 'block',
                left: '115px',
                // duration: 0.8
                duration
            });

            await gsap.to("#screen13 > .s13_lungs", {
                opacity: 1,
                // duration: 0.4
                duration
            });

            await gsap.to("#screen13 > .s13_block1", {
                scaleX: 1,
                scaleY: 1,
                display: 'block',
                // duration: 0.8
                duration
            });

            await gsap.to("#screen13 > .s13_block1 > .text1", {
                opacity: 1,
                display: 'block',
                // duration: 0.4
                duration
            });

            await gsap.to("#screen13 > .s13_block1 > .text2", {
                opacity: 1,
                display: 'block',
                // duration: 0.4
                duration
            })

            await gsap.to("#screen13 > #s6_block3 > #p-click1", {
                display: 'flex',
                opacity: 1,
                top: '396px',
                // duration: 0.4
                duration
            });

            await gsap.to("#screen13 > #s6_block3 > .bot_text", {
                opacity: 1,
                right: '283px',
                // duration: 0.4
                duration
            })
        }
    }

    let screen14 = {
        get parentDiv() {
            return $("#screen14");
        },

        show() {
            screen = '14';
            this.resetCss();
            screenShowHide(".screen:not(#screen14)", this.parentDiv);
            this.animateCss();
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableNext();
            enableNext(); // enable next only if next screen is already visited
            enableBack();

            // resetting table images
            $("#screen14 > .table_images").css({
                opacity: 0,
                top: '200px'
                // top: '300px'
            });

            // resetting table bottom
            $("#screen14 > .table_bot").css({
                opacity: 0,
                top: '753px'
                // top: '653px'
            });

            // resetting button
            $("#screen14 > .s14_btn").css({
                display: 'none',
                opacity: 0,
                'pointer-events': 'none'
            });

            // resetting head text
            $("#screen14 > .text1").css({
                opacity: 0,
                left: '70%'
                // left: '50%'
            });
        },

        async animateCss() {
            let duration = 0.8;
            gsap.to("#screen14 > .table_images", {
                opacity: 1,
                top: '300px',
                duration
            });

            await gsap.to("#screen14 > .table_bot", {
                opacity: 1,
                top: '653px',
                duration
            });

            await gsap.to("#screen14 > .s14_btn", {
                display: 'block',
                opacity: 1,
                delay: 1,
                duration
            });

            gsap.to("#screen14 > .text1", {
                opacity: 1,
                left: '50%',
                duration,
                onComplete: function () {
                    enableNext(true);

                    $("#screen14 > .s14_btn").css({
                        'pointer-events': 'auto'
                    });

                    $("#screen14 > .s14_btn").on('click', (e) => {
                        e.stopImmediatePropagation();

                        screen15.show();
                    })
                }
            });

        }
    }

    function showEmptyPopup() {
        gsap.fromTo('#empty_popup', {
            display: 'none',
            opacity: 0
        }, {
            display: 'block',
            opacity: 1,
            duration: 0.4,
            onComplete: function () {
                $("#empty_popup > .popup > .text3").one('click', e => {
                    e.stopImmediatePropagation();
                    $("#empty_popup").css({
                        display: 'none',
                        opacity: 0
                    });
                });
            }
        });
    }

    let screen15 = {
        get parentDiv() {
            return $("#screen15");
        },

        is15Viewed: false,

        enableDraggable() {
            const allDraggableSelector = "#screen15 > .main_block > .drag1, #screen15 > .main_block > .drag2, #screen15 > .main_block > .drag3";
            const droppableSelector = "#screen15 > .main_block > .dropbox";

            const draggableDefaultPositions = {
                "drag1": {
                    top: '163px',
                    left: '1528px'
                },
                "drag2": {
                    top: '412px',
                    left: '1528px'
                },
                "drag3": {
                    top: '661px',
                    left: '1528px'
                }
            }

            $(allDraggableSelector).each((i, elem) => {
                let elemClass = elem.classList[0];
                $(elem).css({
                    top: draggableDefaultPositions[elemClass].top,
                    left: draggableDefaultPositions[elemClass].left,
                });
            });

            const draggableDroppedPosition = {
                top: '421px',
                left: '808px'
            }

            async function animateRevert(draggableClass) {
                $(draggableClass).draggable('disable');

                await gsap.to(`.${draggableClass}`, {
                    top: draggableDefaultPositions[draggableClass].top,
                    left: draggableDefaultPositions[draggableClass].left,
                    duration: 0.4,
                    onComplete: () => {
                        $(draggableClass).draggable('enable');
                    }
                });
            }

            async function animateDrop(draggableClass) {
                $(draggableClass).draggable('disable');

                await gsap.to(`.${draggableClass}`, {
                    top: draggableDroppedPosition.top,
                    left: draggableDroppedPosition.left,
                    duration: 0.4,
                    onComplete: () => {
                        $(draggableClass).draggable('enable');
                    }
                });
            }

            let scale = null;
            let droppablePositionLimits = null;
            function isDraggableDropped(currentTop, currentLeft) {
                let topCornerTop = droppablePositionLimits.topLeftCorner.top,
                    topCornerLeft = droppablePositionLimits.topLeftCorner.left,
                    bottomCornerTop = droppablePositionLimits.bottomRightCorner.top,
                    bottomCornerLeft = droppablePositionLimits.bottomRightCorner.left;

                if(currentTop >= topCornerTop
                    && currentTop <= bottomCornerTop
                    && currentLeft >= topCornerLeft
                    && currentLeft <= bottomCornerLeft) {
                    return true;
                }
                return false;
            }

            function imitateDrop(ui) {
                console.log('dropped');

                // verifying whether another option is already dragged
                let droppedDraggables = $("#screen15 > .main_block > .drag1.dropped, #screen15 > .main_block > .drag2.dropped, #screen15 > .main_block > .drag3.dropped");
                if (droppedDraggables.length > 0) {
                    droppedDraggables.removeClass('dropped');
                    let revertDraggableClass = droppedDraggables[0].classList[0];
                    animateRevert(revertDraggableClass);
                }

                let uiDraggable = ui.helper;
                uiDraggable.addClass('dropped');

                let draggableClass = uiDraggable[0].classList[0];
                animateDrop(draggableClass);
            }

            function imitateOut(ui) {
                console.log('out');
                let uiDraggable = ui.helper;
                uiDraggable.removeClass('dropped');
            }

            $(droppableSelector).droppable();

            $(droppableSelector).droppable("disable");

            $(droppableSelector).on("over", (e, ui) => {});

            $(droppableSelector).on("drop", (e, ui) => {
                console.log('dropped');

                // verifying whether another option is already dragged
                let droppedDraggables = $("#screen15 > .main_block > .drag1.dropped, #screen15 > .main_block > .drag2.dropped, #screen15 > .main_block > .drag3.dropped");
                if (droppedDraggables.length > 0) {
                    droppedDraggables.removeClass('dropped');
                    let revertDraggableClass = droppedDraggables[0].classList[0];
                    animateRevert(revertDraggableClass);
                }

                let uiDraggable = ui.draggable;
                uiDraggable.addClass('dropped');

                let draggableClass = uiDraggable[0].classList[0];
                animateDrop(draggableClass);
            });

            $(droppableSelector).on("out", (e, ui) => {
                console.log('out');
                let uiDraggable = ui.draggable;
                uiDraggable.removeClass('dropped');
            });

            $(allDraggableSelector).draggable({
                zIndex: 1010,
                start: (e, ui) => {
                    scale = $("#wrapper").css('transform')
                    scale = parseFloat(scale.slice(scale.indexOf("(") + 1, scale.indexOf(',')));
                    console.log(scale);
                    droppablePositionLimits = {
                        topLeftCorner: {
                            // top: 13 * scale,
                            // left: 318 * scale
                            top: 161 - 100,
                            left: 561 - 100 
                        },
                        bottomRightCorner: {
                            // top: 745 * scale,
                            top: 745,
                            // left: 1273 * scale
                            left: 1273
                        }
                    }
                },
                drag: (e, ui) => {
                    if (scale != 1) {
                        ui.position.top /= scale;
                        ui.position.left /= scale;
                    }
                },
                stop: async (e, ui) => {
                    console.log('stopped');
                    let uiDraggable = ui.helper;

                    let currentTop = ui.position.top;
                    let currentLeft = ui.position.left;

                    if(isDraggableDropped(currentTop, currentLeft)) {
                        // $(droppableSelector).trigger('drop', $($(uiDraggable)));
                        imitateDrop(ui);
                    }
                    else {
                        // $(droppableSelector).trigger('out', $($(uiDraggable)));
                        imitateOut(ui);
                    }

                    if (!$(uiDraggable).is('.dropped')) {
                        let draggableClass = uiDraggable[0].classList[0];
                        animateRevert(draggableClass);
                    }
                }
            });
        },

        destroyDraggable() {
            const allDraggableSelector = "#screen15 > .main_block > .drag1, #screen15 > .main_block > .drag2, #screen15 > .main_block > .drag3";

            $(allDraggableSelector).each((i, elem) => {
                let draggableInstance = $(elem).draggable('instance');
                if (draggableInstance != undefined) {
                    let draggableBindings = draggableInstance.bindings;
                    draggableBindings.draggable('destroy');
                    $(elem).removeClass('dropped');
                }
            })

            const droppableSelector = "#screen15 > .main_block > .dropbox";
            let droppableInstance = $(droppableSelector).droppable('instance');
            if (droppableInstance != undefined) {
                let droppableBindings = droppableInstance.bindings;
                droppableBindings.droppable('destroy');
            }
        },

        async show() {
            screen = '15';
            this.resetCss();
            screenShowHide(".screen:not(#screen15)", this.parentDiv);
            this.animateCss();
            this.is15Viewed = true;

            // wrong popup
            async function animateWrongPopup(popupSelector) {
                gsap.fromTo(`${popupSelector} > .wrong_circle`, {
                    scaleX: 0,
                    scaleY: 0
                }, {
                    scaleX: 1,
                    scaleY: 1,
                    duration: 0.8
                });

                await gsap.to(popupSelector, {
                    opacity: 1,
                    display: 'block',
                    duration: 0.8,
                    onComplete: function () {
                        $(`${popupSelector} > .s15_wrong_btn`).one('click', () => {
                            $(popupSelector).css({
                                display: 'none',
                                opacity: 0
                            });
                            $("#screen15 > .main_block").css({
                                display: 'block'
                            });
                            screen15.destroyDraggable();
                            screen15.enableDraggable();
                        });
                    }
                });
            }

            // right popup
            async function animateRightPopup(popupSelector) {
                const textContentSelector = `${popupSelector} > .right_block > .right_text1, ${popupSelector} > .right_block > .right_text2, ${popupSelector} > .right_block > .right_text3`;
                const buttonSelector = `${popupSelector} > .s15_right_btn`;

                $(textContentSelector).css({
                    display: 'none',
                    opacity: 0
                });

                $(buttonSelector).css({
                    display: 'none',
                    opacity: 0
                });

                gsap.fromTo(`${popupSelector} > .right_circle`, {
                    scaleX: 0,
                    scaleY: 0
                }, {
                    scaleX: 1,
                    scaleY: 1,
                    duration: 0.8
                });

                await gsap.to(popupSelector, {
                    opacity: 1,
                    display: 'block',
                    duration: 0.8
                });

                await gsap.to(textContentSelector, {
                    opacity: 1,
                    display: 'block',
                    delay: 1,
                    duration: 0.8
                });

                enableNext(true);
                await gsap.to(buttonSelector, {
                    opacity: 1,
                    display: 'block',
                    // delay: 1,
                    duration: 0.8,
                    onComplete: function () {
                        $(buttonSelector).on('click', e => {
                            e.stopImmediatePropagation();
                            screen16.show();
                        });
                    }
                });
            }

            // button click
            async function handleDraggableButtonClick(e) {
                e.stopImmediatePropagation();

                const droppedDraggables = $("#screen15 > .main_block > .drag1.dropped, #screen15 > .main_block > .drag2.dropped, #screen15 > .main_block > .drag3.dropped");
                if ($(droppedDraggables).length == 0) {
                    // no draggables dropped
                    showEmptyPopup();
                } else if ($(droppedDraggables).length > 0) {
                    // show respective popup based upon the answer
                    const answerObject = {
                        "drag1": "wrong_popup",
                        "drag2": "right_popup",
                        "drag3": "wrong_popup",
                    }

                    let draggableClass = $(droppedDraggables)[0].classList[0];
                    let popupSelector = `#screen15 .${answerObject[draggableClass]}`;

                    // hide main popup
                    $("#screen15 > .main_block").css({
                        display: 'none'
                    });
                    $("#screen15 > .wrong_popup, #screen15 > .right_popup").css({
                        opacity: 0
                    });

                    if (popupSelector == "#screen15 .wrong_popup") {
                        animateWrongPopup(popupSelector);
                    } else if (popupSelector == "#screen15 .right_popup") {
                        animateRightPopup(popupSelector);
                    }
                }
            }

            $("#screen15 > .main_block > .s15_btn").on('click', handleDraggableButtonClick);
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableNext();
            enableNext(); // enable next only if next screen is already visited
            enableBack();

            this.destroyDraggable();

            // resetting main and two popups
            $("#screen15 > .main_block, #screen15 > .wrong_popup, #screen15 > .right_popup").css({
                display: 'none'
            });
            $("#screen15 > .wrong_popup, #screen15 > .right_popup").css({
                opacity: 0
            });

            // resetting main block contents
            // resetting left line
            $("#screen15 > .main_block > .mline1").css({
                width: "0px"
                // width: '180px'
            });

            // resetting left box
            $("#screen15 > .main_block > .left_block").css({
                opacity: 0,
                left: '-370px'
                // left: '42px'
            });

            // resetting right line 1
            $("#screen15 > .main_block > .rightline1").css({
                width: '0px'
                // width: '255px'
            });

            // resetting right boxes 
            $("#screen15 > .main_block > .drag1, #screen15 > .main_block > .drag2, #screen15 > .main_block > .drag3").css({
                opacity: 0,
                'pointer-events': 'none',
                left: '1918px'
                // left: '1528px'
            });

            // resetting right line 2
            $("#screen15 > .main_block > .rightline2").css({
                width: '0px'
                // width: '191px'
            });

            // resetting right line 3
            $("#screen15 > .main_block > .rightline3").css({
                width: '0px'
                // width: '252px'
            });

            // resetting head text
            $("#screen15 > .main_block > .center_text").css({
                opacity: 0,
                left: '1000px'
                // left: '531px'
            });

            // resetting button
            $("#screen15 > .main_block > .s15_btn").css({
                display: 'none',
                opacity: 0
            });

            $("#screen15 > .main_block > .drag1, #screen15 > .main_block > .drag2, #screen15 > .main_block > .drag3").css({
                cursor: 'auto'
            });
        },

        async animateCss() {
            let duration = 0.8;

            $("#screen15 > .main_block").css({
                display: 'block'
            });

            await Promise.all([
                gsap.to("#screen15 > .main_block > .mline1", {
                    width: '180px',
                    delay: 1,
                    duration: 1.6
                }),
                gsap.to("#screen15 > .main_block > .left_block", {
                    opacity: 1,
                    left: '42px',
                    delay: 1,
                    duration
                })
            ]);


            await Promise.all([
                gsap.to("#screen15 > .main_block > .rightline1", {
                    width: '255px',
                    duration: 1.6
                }),
                gsap.to("#screen15 > .main_block > .rightline2", {
                    width: '191px',
                    duration: 1.6
                }),
                gsap.to("#screen15 > .main_block > .rightline3", {
                    width: '252px',
                    duration: 1.6
                })
            ]);

            await Promise.all([
                gsap.fromTo("#screen15 > .main_block > .drag1", {
                    opacity: 0,
                    top: '163px',
                    left: '1918px'
                }, {
                    opacity: 1,
                    left: '1528px',
                    duration
                }),
                gsap.fromTo("#screen15 > .main_block > .drag2", {
                    opacity: 0,
                    top: '412px',
                    left: '1918px'
                }, {
                    opacity: 1,
                    left: '1528px',
                    duration
                }),
                gsap.fromTo("#screen15 > .main_block > .drag3", {
                    opacity: 0,
                    top: '661px',
                    left: '1918px'
                }, {
                    opacity: 1,
                    left: '1528px',
                    duration
                }),
            ]);

            await gsap.to("#screen15 > .main_block > .center_text", {
                opacity: 1,
                left: '531px',
                delay: 1,
                duration
            });

            await gsap.to("#screen15 > .main_block > .s15_btn", {
                display: 'block',
                opacity: 1,
                delay: 1,
                duration,
                onComplete: function () {
                    $("#screen15 > .main_block > .drag1, #screen15 > .main_block > .drag2, #screen15 > .main_block > .drag3").css({
                        cursor: 'pointer',
                        'pointer-events': 'auto'
                    });
                    screen15.enableDraggable();
                }
            });
        }
    }

    let screen16 = {
        get parentDiv() {
            return $("#screen16");
        },

        enableDraggable() {
            const allDraggableSelector = "#screen16 > .main_block > .drag1, #screen16 > .main_block > .drag2, #screen16 > .main_block > .drag3";
            const droppableSelector = "#screen16 > .main_block > .dropbox";

            const draggableDefaultPositions = {
                "drag1": {
                    top: '163px',
                    left: '1528px'
                },
                "drag2": {
                    top: '412px',
                    left: '1528px'
                },
                "drag3": {
                    top: '661px',
                    left: '1528px'
                }
            }

            $(allDraggableSelector).each((i, elem) => {
                let elemClass = elem.classList[0];
                $(elem).css({
                    top: draggableDefaultPositions[elemClass].top,
                    left: draggableDefaultPositions[elemClass].left,
                });
            });

            const draggableDroppedPosition = {
                top: '421px',
                left: '808px'
            }

            async function animateRevert(draggableClass) {
                $(draggableClass).draggable('disable');

                await gsap.to(`.${draggableClass}`, {
                    top: draggableDefaultPositions[draggableClass].top,
                    left: draggableDefaultPositions[draggableClass].left,
                    duration: 0.4,
                    onComplete: () => {
                        $(draggableClass).draggable('enable');
                    }
                });
            }

            async function animateDrop(draggableClass) {
                $(draggableClass).draggable('disable');

                await gsap.to(`.${draggableClass}`, {
                    top: draggableDroppedPosition.top,
                    left: draggableDroppedPosition.left,
                    duration: 0.4,
                    onComplete: () => {
                        $(draggableClass).draggable('enable');
                    }
                });
            }

            let scale = null;
            let droppablePositionLimits = null;
            function isDraggableDropped(currentTop, currentLeft) {
                let topCornerTop = droppablePositionLimits.topLeftCorner.top,
                    topCornerLeft = droppablePositionLimits.topLeftCorner.left,
                    bottomCornerTop = droppablePositionLimits.bottomRightCorner.top,
                    bottomCornerLeft = droppablePositionLimits.bottomRightCorner.left;

                if(currentTop >= topCornerTop
                    && currentTop <= bottomCornerTop
                    && currentLeft >= topCornerLeft
                    && currentLeft <= bottomCornerLeft) {
                    return true;
                }
                return false;
            }

            function imitateDrop(ui) {
                console.log('dropped');

                // verifying whether another option is already dragged
                let droppedDraggables = $("#screen16 > .main_block > .drag1.dropped, #screen16 > .main_block > .drag2.dropped, #screen16 > .main_block > .drag3.dropped");
                if (droppedDraggables.length > 0) {
                    droppedDraggables.removeClass('dropped');
                    let revertDraggableClass = droppedDraggables[0].classList[0];
                    animateRevert(revertDraggableClass);
                }

                let uiDraggable = ui.helper;
                uiDraggable.addClass('dropped');

                let draggableClass = uiDraggable[0].classList[0];
                animateDrop(draggableClass);
            }

            function imitateOut(ui) {
                console.log('out');
                let uiDraggable = ui.helper;
                uiDraggable.removeClass('dropped');
            }

            $(droppableSelector).droppable();

            $(droppableSelector).on('over', (e, ui) => {});

            $(droppableSelector).on('drop', (e, ui) => {
                console.log('dropped');

                // verifying whether another option is already dragged
                let droppedDraggables = $("#screen16 > .main_block > .drag1.dropped, #screen16 > .main_block > .drag2.dropped, #screen16 > .main_block > .drag3.dropped");
                if (droppedDraggables.length > 0) {
                    droppedDraggables.removeClass('dropped');
                    let revertDraggableClass = droppedDraggables[0].classList[0];
                    animateRevert(revertDraggableClass);
                }

                let uiDraggable = ui.draggable;
                uiDraggable.addClass('dropped');

                let draggableClass = uiDraggable[0].classList[0];
                animateDrop(draggableClass);
            });

            $(droppableSelector).on('out', (e, ui) => {
                console.log('out');
                let uiDraggable = ui.draggable;
                uiDraggable.removeClass('dropped');
            });

            $(allDraggableSelector).draggable({
                zIndex: 100,
                start: (e, ui) => {
                    scale = $("#wrapper").css('transform')
                    scale = parseFloat(scale.slice(scale.indexOf("(") + 1, scale.indexOf(',')));
                    console.log(scale);
                    droppablePositionLimits = {
                        topLeftCorner: {
                            // top: 13 * scale,
                            // left: 318 * scale
                            top: 161 - 100,
                            left: 561 - 100 
                        },
                        bottomRightCorner: {
                            // top: 745 * scale,
                            top: 745,
                            // left: 1273 * scale
                            left: 1273
                        }
                    }
                },
                drag: (e, ui) => {
                    if (scale != 1) {
                        ui.position.top /= scale;
                        ui.position.left /= scale;
                    }
                },
                stop: async (e, ui) => {
                    console.log('stopped');
                    let uiDraggable = ui.helper;

                    let currentTop = ui.position.top;
                    let currentLeft = ui.position.left;

                    if(isDraggableDropped(currentTop, currentLeft)) {
                        // $(droppableSelector).trigger('drop', $($(uiDraggable)));
                        imitateDrop(ui);
                    }
                    else {
                        // $(droppableSelector).trigger('out', $($(uiDraggable)));
                        imitateOut(ui);
                    }

                    if (!$(uiDraggable).is('.dropped')) {
                        let draggableClass = uiDraggable[0].classList[0];
                        animateRevert(draggableClass);
                    }
                }
            });
        },

        destroyDraggable() {
            const allDraggableSelector = "#screen16 > .main_block > .drag1, #screen16 > .main_block > .drag2, #screen16 > .main_block > .drag3";

            $(allDraggableSelector).each((i, elem) => {
                let draggableInstance = $(elem).draggable('instance');
                if (draggableInstance != undefined) {
                    let draggableBindings = draggableInstance.bindings;
                    draggableBindings.draggable('destroy');
                    $(elem).removeClass('dropped');
                }
            });

            const droppableSelector = "#screen16 > .main_block > .dropbox";
            let droppableInstance = $(droppableSelector).droppable('instance');
            if (droppableInstance != undefined) {
                let droppableBindings = droppableInstance.bindings;
                droppableBindings.droppable('destroy');
            }
        },

        show() {
            screen = '16';
            this.resetCss();
            screenShowHide(".screen:not(#screen16)", this.parentDiv);
            this.animateCss();

            // wrong popup
            async function animateWrongPopup(popupSelector) {
                gsap.fromTo(`${popupSelector} > .wrong_circle`, {
                    scaleX: 0,
                    scaleY: 0
                }, {
                    scaleX: 1,
                    scaleY: 1,
                    duration: 0.8
                });

                await gsap.to(popupSelector, {
                    opacity: 1,
                    display: 'block',
                    duration: 0.8,
                    onComplete: function () {
                        $(`${popupSelector} > .s15_wrong_btn`).one('click', () => {
                            $(popupSelector).css({
                                display: 'none',
                                opacity: 0
                            });
                            $("#screen16 > .main_block").css({
                                display: 'block'
                            });
                            screen16.destroyDraggable();
                            screen16.enableDraggable();
                        });
                    }
                });
            }

            // right popup
            async function animateRightPopup(popupSelector) {
                const textContentSelector = `${popupSelector} > .right_block > .right_text1, ${popupSelector} > .right_block > .right_text2, ${popupSelector} > .right_block > .right_text3`;
                const buttonSelector = `${popupSelector} > .s16_right_btn`;

                $(textContentSelector).css({
                    display: 'none',
                    opacity: 0
                });

                $(buttonSelector).css({
                    display: 'none',
                    opacity: 0
                });

                gsap.fromTo(`${popupSelector} > .right_circle`, {
                    scaleX: 0,
                    scaleY: 0
                }, {
                    scaleX: 1,
                    scaleY: 1,
                    duration: 0.8
                });

                await gsap.to(popupSelector, {
                    opacity: 1,
                    display: 'block',
                    duration: 0.8
                });

                await gsap.to(textContentSelector, {
                    opacity: 1,
                    display: 'block',
                    delay: 1,
                    duration: 0.8
                });

                enableNext(true);
                await gsap.to(buttonSelector, {
                    opacity: 1,
                    display: 'block',
                    // delay: 1,
                    duration: 0.8,
                    onComplete: function () {
                        $(buttonSelector).on('click', e => {
                            e.stopImmediatePropagation();
                            screen17.show();
                        });
                    }
                });
            }

            // button click
            async function handleDraggableButtonClick(e) {
                e.stopImmediatePropagation();

                const droppedDraggables = $("#screen16 > .main_block > .drag1.dropped, #screen16 > .main_block > .drag2.dropped, #screen16 > .main_block > .drag3.dropped");
                if ($(droppedDraggables).length == 0) {
                    // no draggables dropped
                    showEmptyPopup();
                } else if ($(droppedDraggables).length > 0) {
                    // show respective popup based upon the answer
                    const answerObject = {
                        "drag1": "right_popup",
                        "drag2": "wrong_popup",
                        "drag3": "wrong_popup",
                    }

                    let draggableClass = $(droppedDraggables)[0].classList[0];
                    let popupSelector = `#screen16 .${answerObject[draggableClass]}`;

                    // hide main popup
                    $("#screen16 > .main_block").css({
                        display: 'none'
                    });
                    $("#screen16 > .wrong_popup, #screen16 > .right_popup").css({
                        opacity: 0
                    });

                    if (popupSelector == "#screen16 .wrong_popup") {
                        animateWrongPopup(popupSelector);
                    } else if (popupSelector == "#screen16 .right_popup") {
                        animateRightPopup(popupSelector);
                    }
                }
            }

            $("#screen16 > .main_block > .s16_btn").on('click', handleDraggableButtonClick);
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableNext();
            enableNext(); // enable next only if next screen is already visited
            enableBack();

            this.destroyDraggable();

            // resetting main and two popups
            $("#screen16 > .main_block, #screen16 > .wrong_popup, #screen16 > .right_popup").css({
                display: 'none'
            });
            $("#screen16 > .wrong_popup, #screen16 > .right_popup").css({
                opacity: 0
            });

            // resetting main block contents
            // resetting left line
            $("#screen16 > .main_block > .mline1").css({
                width: "0px"
                // width: '180px'
            });

            // resetting left box
            $("#screen16 > .main_block > .left_block").css({
                opacity: 0,
                left: '-370px'
                // left: '42px'
            });

            // resetting right line 1
            $("#screen16 > .main_block > .rightline1").css({
                width: '0px'
                // width: '255px'
            });

            // resetting right boxes
            $("#screen16 > .main_block > .drag1, #screen16 > .main_block > .drag2, #screen16 > .main_block > .drag3").css({
                'pointer-events': 'none',
                opacity: 0,
                left: '1918px'
                // left: '1528px'
            });

            // resetting right line 2
            $("#screen16 > .main_block > .rightline2").css({
                width: '0px'
                // width: '191px'
            });

            // resetting right line 3
            $("#screen16 > .main_block > .rightline3").css({
                width: '0px'
                // width: '252px'
            });

            // resetting head text
            $("#screen16 > .main_block > .center_text").css({
                opacity: 0,
                left: '1000px'
                // left: '531px'
            });

            // resetting button
            $("#screen16 > .main_block > .s16_btn").css({
                display: 'none',
                opacity: 0
            });

            $("#screen16 > .main_block > .drag1, #screen16 > .main_block > .drag2, #screen16 > .main_block > .drag3").css({
                cursor: 'auto'
            });
        },

        async animateCss() {
            let duration = 0.8;

            $("#screen16 > .main_block").css({
                display: 'block'
            });

            await Promise.all([
                gsap.to("#screen16 > .main_block > .mline1", {
                    width: '180px',
                    delay: 1,
                    duration: 1.6
                }),
                gsap.to("#screen16 > .main_block > .left_block", {
                    opacity: 1,
                    left: '42px',
                    delay: 1,
                    duration
                })
            ]);

            await Promise.all([
                gsap.to("#screen16 > .main_block > .rightline1", {
                    width: '255px',
                    duration: 1.6
                }),
                gsap.to("#screen16 > .main_block > .rightline2", {
                    width: '191px',
                    duration: 1.6
                }),
                gsap.to("#screen16 > .main_block > .rightline3", {
                    width: '252px',
                    duration: 1.6
                })
            ]);

            await Promise.all([
                gsap.fromTo("#screen16 > .main_block > .drag1", {
                    opacity: 0,
                    top: '163px',
                    left: '1918px'
                }, {
                    opacity: 1,
                    left: '1528px',
                    duration
                }),
                gsap.fromTo("#screen16 > .main_block > .drag2", {
                    opacity: 0,
                    top: '412px',
                    left: '1918px'
                }, {
                    opacity: 1,
                    left: '1528px',
                    duration
                }),
                gsap.fromTo("#screen16 > .main_block > .drag3", {
                    opacity: 0,
                    top: '661px',
                    left: '1918px'
                }, {
                    opacity: 1,
                    left: '1528px',
                    duration
                }),
            ]);

            await gsap.to("#screen16 > .main_block > .center_text", {
                opacity: 1,
                left: '531px',
                delay: 1,
                duration
            });

            await gsap.to("#screen16 > .main_block > .s16_btn", {
                display: 'block',
                opacity: 1,
                delay: 1,
                duration,
                onComplete: function () {
                    $("#screen16 > .main_block > .drag1, #screen16 > .main_block > .drag2, #screen16 > .main_block > .drag3").css({
                        'pointer-events': 'auto',
                        cursor: 'pointer'
                    });
                    screen16.enableDraggable();
                }
            });
        }
    }

    let screen17 = {
        get parentDiv() {
            return $("#screen17");
        },

        is17Viewed: false,

        show() {
            screen = '17';
            this.resetCss();
            screenShowHide(".screen:not(#screen17)", this.parentDiv);
            this.animateCss();
            this.is17Viewed = true;
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableNext();
            enableNext(); // enable next only if next screen is already visited
            enableBack();

            // resetting left side
            $("#screen17 > .left_sec").css({
                left: '-550px'
                // left: '2px'
            });

            // resetting right side
            $("#screen17 > .right_sec").css({
                left: '1920px'
                // left: '1142px'
            });

            // resetting center
            gsap.to("#screen17 > .center_sec", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            // resetting publish text
            gsap.to("#screen17 > .center_sec > .publish", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            // resetting bottom right text
        },

        async animateCss() {
            gsap.to("#screen17 > .left_sec", {
                left: '2px',
                duration: 0.8
            });

            gsap.to("#screen17 > .right_sec", {
                left: '1142px',
                duration: 0.8
            });

            await gsap.to("#screen17 > .center_sec", {
                scaleX: 1,
                scaleY: 1,
                duration: 1.6
            });

            await gsap.to("#screen17 > .center_sec > .publish", {
                scaleX: 1,
                scaleY: 1,
                delay: 2,
                duration: 0.8,
                onComplete: () => {
                    enableNext(true);
                }
            });

            // animate the bottom right text
        }
    }

    let screen18 = {
        get parentDiv() {
            return $("#screen18");
        },

        show() {
            screen = '18';
            this.resetCss();
            screenShowHide(".screen:not(#screen18)", this.parentDiv);
            this.animateCss();

            $("#screen18 > .mid_block > .ok_btn").on('click', e => {
                e.stopImmediatePropagation();
                screen19.show();
            })
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableNext();
            enableNext(); // enable next only if next screen is already visited
            enableBack();

            $("#screen18 > .mid_block > .ok_btn").css({
                'pointer-events': 'none'
            });

            await gsap.to("#screen18 > .mid_block", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            await gsap.to("#screen18 > .mid_block > .ok_btn", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            $("#screen18 > .bot_text", {
                right: '-340px'
                // right: '278px' 
            });
        },

        async animateCss() {
            let duration = 1;

            gsap.to("#screen18 > .mid_block", {
                scaleX: 1,
                scaleY: 1,
                duration
            });

            gsap.to("#screen18 > .mid_block > .ok_btn", {
                scaleX: 1,
                scaleY: 1,
                duration
            });

            await gsap.to("#screen18 > .bot_text", {
                right: '278px',
                duration,
                onComplete: () => {
                    enableNext(true);
                    $("#screen18 > .mid_block > .ok_btn").css({
                        'pointer-events': 'auto'
                    });
                }
            });
        }
    }

    let screen19 = {
        get parentDiv() {
            return $("#screen19");
        },

        show() {
            screen = '19';
            this.resetCss();
            screenShowHide(".screen:not(#screen19)", this.parentDiv);
            this.animateCss();

            $("#screen19 > .s19_btn").on("click", e => {
                e.stopImmediatePropagation();
                screen20.show();
            })
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableNext();
            enableNext(); // enable next only if next screen is already visited
            enableBack();

            $("#screen19 > .s19_block1 > .s19_text1, #screen19 > .s19_block1 > .s19_text2").css({
                opacity: 0
            });

            $("#screen19 > .centertext").css({
                opacity: 0
            });

            $("#screen19 > .s19_lungs").css({
                opacity: 0
            });

            $("#screen19 > .s19_btn").css({
                display: 'none',
                opacity: 0,
                'pointer-events': 'none'
            });

            $("#screen19 > .s19_character").css({
                left: '-530px'
                // left: '115px'
            });

            await gsap.to("#screen19 > .s19_mid_pop", {
                scaleX: 0,
                duration: 0
            });

            await gsap.to("#screen19 > .s19_block1", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });
        },

        async animateCss() {
            let duration = 0.8;

            gsap.to("#screen19 > .s19_character", {
                left: '115px',
                duration
            });

            gsap.to("#screen19 > .s19_lungs", {
                opacity: 1,
                duration: 1.6
            })

            await gsap.to("#screen19 > .s19_mid_pop", {
                scaleX: 1,
                duration: 1.6
            });

            await gsap.to("#screen19 > .s19_block1", {
                scaleX: 1,
                scaleY: 1,
                delay: 0.5,
                duration
            });

            await gsap.to("#screen19 > .s19_block1 > .s19_text1, #screen19 > .s19_block1 > .s19_text2", {
                opacity: 1,
                duration
            });

            await gsap.to("#screen19 > .centertext", {
                opacity: 1,
                delay: 2,
                duration
            });

            await gsap.to("#screen19 > .s19_btn", {
                opacity: 1,
                display: 'block',
                duration,
                onComplete: () => {
                    $("#screen19 > .s19_btn").css({
                        'pointer-events': 'auto'
                    });
                    enableNext(true);

                }
            });
        }
    }

    let screen20 = {
        get parentDiv() {
            return $("#screen20");
        },

        show() {
            screen = '20';
            this.resetCss();
            screenShowHide(".screen:not(#screen20)", this.parentDiv);
            this.animateCss();
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableNext();
            enableBack();

            $("#global_menu > .top_nav, #global_menu > .bottom_nav").css({
                display: 'none'
            });

            // resetting text
            $("#screen20 > p").css({
                left: '-21%'
                // left: '50%'
            });

            // resetting plane and smoke
            $("#screen20 > .planeanim").css({
                left: '-46%'
                // left: '150%'
            })
        },

        async animateCss() {
            gsap.to("#screen20 > .planeanim", {
                left: '150%',
                duration: 5,
            });

            gsap.to("#screen20 > p", {
                left: '50%',
                ease: 'power1.out',
                delay: 0.3,
                duration: 2,
                onComplete: function () {
                    setTimeout(() => {
                        screen21.show();
                    }, 5000);
                }
            });
        }
    }

    let screen21 = {
        get parentDiv() {
            return $("#screen21");
        },

        is21Viewed: false,

        show() {
            screen = '21';
            this.resetCss();
            screenShowHide(".screen:not(#screen21)", this.parentDiv);
            this.animateCss();
            this.is21Viewed = true;

            function handlePClick(e) {
                e.stopImmediatePropagation();
                let popupBtn = `#screen21 .${this.classList[0]}`;
                let popup = `#screen21 .popup${this.classList[0] == "item1" ? 1 : 2}`;

                if (this.classList[0] == "item1") {
                    $("#screen21 > .main_slide > .done1").css({
                        opacity: 1
                    });
                } else {
                    $("#screen21 > .main_slide > .done2").css({
                        opacity: 1
                    });
                }

                handleOpenPopup({
                    popupBtn: popupBtn,
                    popup: popup,
                });
            }

            async function handleOpenPopup(options) {
                let {
                    popupBtn,
                    popup
                } = options;

                let popupLeftContent = `${popup} > .center_block > .lefttext1, ${popup} > .center_block > .leftimg1`;
                let popupMidLine = `${popup} > .center_block > .line`;
                let popupRightLine = `${popup} > .center_block > .rightline`;
                let popupRightCircle = `${popup} > .center_block > .rightcircle`;
                let popupRightText1 = `${popup} > .center_block > .righttext1`;
                let popupRightText2 = `${popup} > .center_block > .righttext2`;
                let popupCloseBtn = `${popup} > .bot_btn`;

                let popuprightLine1 = `${popup} > .center_block > .rightline1`;
                let popupRightCircle1 = `${popup} > .center_block > .rightcircle1`;
                let popupRightText3 = `${popup} > .center_block > .righttext3`;

                // hiding main content
                $("#screen21 > .main_slide").css({
                    display: 'none',
                    opacity: 0
                });

                // reset all animations for popup

                // reset popupLeftContent
                $(popupLeftContent).css({
                    opacity: 0
                });

                // reset popup mid line
                await gsap.to(popupMidLine, {
                    scaleY: 0,
                    // scaleY: 6.5
                    duration: 0
                });

                // reset popup right text1
                $(popupRightText1).css({
                    opacity: 0
                });

                // reset popup right line
                $(popupRightLine).css({
                    height: '0px'
                    // height: '86px'
                })

                // reset popup right circle
                await gsap.to(popupRightCircle, {
                    scaleX: 0,
                    scaleY: 0,
                    duration: 0
                });

                // reset popup right text
                $(`${popupRightText1}, ${popupRightText2}`).css({
                    opacity: 0
                });

                // reset popup close button
                $(popupCloseBtn).css({
                    opacity: 0,
                    'pointer-events': 'none'
                });

                /***for 2nd popup***/
                if (popup == '#screen21 .popup2') {
                    // reset popup right line1
                    $(popuprightLine1).css({
                        height: '0px'
                        // height: '80px'
                    });

                    // reset popup right circle
                    await gsap.to(popupRightCircle1, {
                        scaleX: 0,
                        scaleY: 0,
                        duration: 0
                    });

                    // reset popup right text3
                    $(popupRightText3).css({
                        opacity: 0
                    });
                }

                /***animating popup content***/
                let duration = 0.8;
                await gsap.to(popup, {
                    display: 'block',
                    opacity: 1,
                    duration
                });

                // animating popup left text and left image
                await gsap.to(popupLeftContent, {
                    opacity: 1,
                    duration
                });

                // animating popup mid line
                await gsap.to(popupMidLine, {
                    scaleY: 6.5,
                    duration
                });

                // animating popup right text1
                await gsap.to(popupRightText1, {
                    opacity: 1,
                    duration
                });

                // animating popup right line
                await gsap.to(popupRightLine, {
                    height: '86px',
                    duration
                });

                // animating popup right circle
                await gsap.to(popupRightCircle, {
                    scaleX: 1,
                    scaleY: 1,
                    duration
                });

                // animating popup right text2
                await gsap.to(popupRightText2, {
                    opacity: 1,
                    duration
                });

                if (popup == '#screen21 .popup2') {
                    // animating popup right line1
                    await gsap.to(popuprightLine1, {
                        height: '80px',
                        duration
                    });

                    // animating popup right circle1
                    await gsap.to(popupRightCircle1, {
                        scaleX: 1,
                        scaleY: 1,
                        duration
                    });

                    // animating popup right text3
                    await gsap.to(popupRightText3, {
                        opacity: 1,
                        duration
                    });
                }


                // animating popup close btn
                await gsap.to(popupCloseBtn, {
                    opacity: 1,
                    'pointer-events': 'auto',
                    duration,
                    onComplete: () => {
                        $(popupCloseBtn).on('click', e => {
                            e.stopImmediatePropagation();
                            $(popup).css({
                                display: 'none',
                                opacity: 0
                            });

                            $("#screen21 > .main_slide").css({
                                display: 'block',
                                opacity: 1
                            });

                            if ($("#screen21 > .main_slide > .done1").css('opacity') == 1 && $("#screen21 > .main_slide > .done2").css('opacity') == 1) {
                                enableNext(true);
                            }
                        });
                    }
                });

            }

            $("#screen21 > .main_slide .item1, #screen21 > .main_slide .circle").on('click', handlePClick);
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            disableNext();
            enableNext(); // enable next only if next screen is already visited
            enableBack();

            // hiding done
            $("#screen21 > .main_slide > .done1, #screen21 > .main_slide > .done2").css({
                opacity: 0
            });

            $("#global_menu > .top_nav, #global_menu > .bottom_nav").css({
                display: 'flex',
                opacity: 1
            });

            $("#screen21 > .main_slide, #screen21 > .popup1, #screen21 > .popup2").css({
                display: 'none',
                opacity: 0
            });

            // reset character goes here

            // resetting table
            $("#screen21 > .main_slide > .table").css({
                opacity: 0,
                top: '900px'
                // top: '848px'
            })

            // resetting box1 and box2
            $("#screen21 > .main_slide > .box1, #screen21 > .main_slide > .box2").css({
                height: "0px",
                // height: '716px'
                opacity: 0
            });

            // resetting bottom text
            $("#screen21 > .main_slide > .bot_text").css({
                opacity: 0,
                right: '-713px'
                // right: '142px'
            });

            // resetting item1 and item2
            await gsap.to("#screen21 > .main_slide > .box1 > .item1, #screen21 > .main_slide > .box2 > .circle", {
                scaleX: 0,
                scaleY: 0,
                duration: 0,
                'pointer-events': 'none'
            });
        },

        async animateCss() {
            let duration = 0.8;

            $("#screen21 > .main_slide").css({
                display: 'block',
                opacity: 1
            });

            // animate character css goes here

            // animating table
            await gsap.to("#screen21 > .main_slide > .table", {
                opacity: 1,
                top: '848px',
                duration
            })

            // animate box1 and box2
            await gsap.to("#screen21 > .main_slide > .box1, #screen21 > .main_slide > .box2", {
                height: "686px",
                // height: "0px",
                opacity: 1,
                duration
            });

            // animate item1 and circle
            await gsap.to("#screen21 > .main_slide > .box1 > .item1, #screen21 > .main_slide > .box2 > .circle", {
                scaleX: 1,
                scaleY: 1,
                duration
            });

            // animate bottom text
            await gsap.to("#screen21 > .main_slide > .bot_text", {
                opacity: 1,
                right: '142px',
                duration,
                onComplete: () => {
                    $("#screen21 > .main_slide > .box1 > .item1, #screen21 > .main_slide > .box2 > .circle").css({
                        'pointer-events': 'auto'
                    })
                }
            })
        }
    }

    let screen22 = {
        get parentDiv() {
            return $("#screen22");
        },

        show() {
            screen = '22';
            this.resetCss();
            screenShowHide(".screen:not(#screen22)", this.parentDiv);
            this.animateCss();

            async function showWrongPopup() {
                /****Reset animation for popup****/
                // reset main slide
                $("#screen22 > .main_slide, #screen22 > .loading, #screen22 > .right_block, #screen22 > .wrong_block").css({
                    display: 'none',
                    opacity: 0
                });

                // reset box1 and box2
                $("#screen22 > .wrong_block > .box1, #screen22 > .wrong_block > .box2").css({
                    height: '0px'
                    // height: '678px'
                });

                // reset item1 and circle
                await gsap.to("#screen22 > .wrong_block > .box1 > .item1, #screen22 > .wrong_block > .box2 > .circle", {
                    scaleX: 0,
                    scale: 0,
                    duration: 0
                });

                // reset side toggle and btn
                $("#screen22 > .wrong_block > .slide_toggle").css({
                    opacity: 0,
                    right: '-430px'
                    // right: '0px',
                });

                /******Animation for wrong popup******/
                let duration = 0.8;

                // show wrong popup
                $("#screen22 > .wrong_block").css({
                    display: 'block',
                    opacity: 1
                });

                // animate box1 and box2
                await gsap.to("#screen22 > .wrong_block > .box1, #screen22 > .wrong_block > .box2", {
                    height: '678px',
                    duration
                });

                // animate item1 and circle
                gsap.to("#screen22 > .wrong_block > .box1 > .item1, #screen22 > .wrong_block > .box2 > .circle", {
                    scaleX: 1,
                    scaleY: 1,
                    duration
                });

                // animate slide toggle
                await gsap.to("#screen22 > .wrong_block > .slide_toggle", {
                    opacity: 1,
                    right: '0px',
                    duration,
                    onComplete: () => {
                        // click for close wrong block
                        $("#screen22 > .wrong_block > .slide_toggle > .side_btn1").on('click', e => {
                            e.stopImmediatePropagation();

                            $("#screen22 > .wrong_block").css({
                                display: 'none',
                                opacity: 0
                            });

                            $("#screen22 > .main_slide").css({
                                display: 'block',
                                opacity: 1
                            });

                            $("#screen22 > .main_slide > .slide_toggle > .options").removeClass('active');
                        });
                    }
                });
            }

            async function showRightPopup() {
                /*******Reset for right popup*******/
                // reset main slide
                $("#screen22 > .main_slide, #screen22 > .loading, #screen22 > .right_block, #screen22 > .wrong_block").css({
                    display: 'none',
                    opacity: 0
                });

                // reset box1 and box2
                $("#screen22 > .right_block > .box1").css({
                    height: '0px'
                    // height: '678px'
                });
                $("#screen22 > .right_block > .box2").css({
                    height: '0px'
                    // height: '587px'
                });

                // reset item1 and circle
                await gsap.to("#screen22 > .right_block > .box1 > .item1, #screen22 > .right_block > .box2 > .circle", {
                    scaleX: 0,
                    scaleY: 0,
                    duration: 0
                });

                // reset side toggle and btn
                $("#screen22 > .right_block > .slide_toggle").css({
                    opacity: 0,
                    right: '-430px'
                    // right: '0px',
                });

                /*****Animation for right popup*****/
                let duration = 0.8;
                // show right popup
                $("#screen22 > .right_block").css({
                    display: 'block',
                    opacity: 1
                });

                // animate box and box2
                await Promise.all([
                    gsap.to("#screen22 > .right_block > .box1", {
                        height: '678px',
                        duration
                    }),
                    gsap.to("#screen22 > .right_block > .box2", {
                        height: '587px',
                        duration
                    })
                ]);

                // animate item1 and circle
                gsap.to("#screen22 > .right_block > .box1 > .item1, #screen22 > .right_block > .box2 > .circle", {
                    scaleX: 1,
                    scaleY: 1,
                    duration
                });

                // animate slide toggle
                await gsap.to("#screen22 > .right_block > .slide_toggle", {
                    opacity: 1,
                    right: '0px',
                    duration,
                    onComplete: () => {
                        enableNext(true);
                    }
                });
            }

            function selectOption(e) {
                e.stopImmediatePropagation();

                // enable blue btn
                $("#screen22 > .main_slide > .side_btn").css({
                    'pointer-events': 'auto'
                });

                let optionClass = e.currentTarget.classList[0];
                console.log(optionClass);

                $("#screen22 > .main_slide > .slide_toggle > .options").removeClass('active');
                $(e.currentTarget).addClass('active');

                $("#screen22 > .main_slide > .side_btn").attr('option', optionClass);
            }

            async function loadingAnimation() {
                console.log('loading');

                $("#screen22 > .main_slide, #screen22 > .loading, #screen22 > .right_popup, #screen22 > .wrong_popup").css({
                    display: 'none',
                    opacity: 0
                });

                // show loading
                $("#screen22 > .loading").css({
                    display: 'block',
                    opacity: 1
                });

                let animateObject = {
                    value: 1
                };

                await gsap.to(animateObject, {
                    value: 12,
                    duration: 3,
                    onUpdate: () => {
                        $("#screen22 > .loading > .loading_images").css({
                            display: 'none'
                        });

                        let currentValue = parseInt(animateObject.value);
                        let imageObject = {
                            1: 'img_1',
                            2: 'img_2',
                            3: 'img_3',
                            4: 'img_4',
                            5: 'img_5',
                            6: 'img_6',
                            7: 'img_7',
                            8: 'img_8',
                            9: 'img_9',
                            10: 'img_10',
                            11: 'img_11',
                        }

                        if (imageObject[currentValue]) {
                            console.log(currentValue);
                            $(`#screen22 > .loading > .loading_images.${imageObject[currentValue]}`).css({
                                display: 'block'
                            });
                        }
                    }
                });
            }

            async function navigatePopup(e) {
                e.stopImmediatePropagation();

                let optionClass = e.currentTarget.getAttribute('option');

                if (optionClass) {
                    e.currentTarget.removeAttribute("option");

                    await loadingAnimation();

                    if (["option1", "option3"].includes(optionClass)) {
                        await showWrongPopup();
                    } else if (optionClass == "option2") {
                        await showRightPopup();
                    }

                    // disable blue btn
                    $("#screen22 > .main_slide > .side_btn").css({
                        'pointer-events': 'none'
                    });
                }
            }

            $("#screen22 > .main_slide > .side_btn").on('click', navigatePopup);

            $("#screen22 > .main_slide > .slide_toggle > .options").on('click', selectOption);
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            enableBack();
            disableNext();
            enableNext(); // enable next only if next screen is already visited

            // reset all options
            $("#screen22 > .main_slide > .slide_toggle > .options").removeClass('active');

            // reset main slide, wrong block and right block
            $("#screen22 > .main_slide, #screen22 > .wrong_block, #screen22 > .right_block").css({
                display: 'none',
                opacity: 0
            });

            // reset slide toggle
            $("#screen22 > .main_slide > .slide_toggle").css({
                display: 'none',
                opacity: 0,
                right: '-430px'
                // right: '0px'
            });

            // reset side btn
            $("#screen22 > .main_slide > .side_btn").css({
                'pointer-events': 'none',
                display: 'none',
                opacity: 0,
                left: '1923px'
                // left: '1593px'
            });

            // reset pointer-evetns for slide toggle options
            $("#screen22 > .main_slide > .slide_toggle > .options").css({
                'pointer-events': 'none'
            });

            // reset bottom text
            $("#screen22 > .main_slide > .bot_text").css({
                opacity: 0,
                right: '-570px'
                // right: '147px'
            });

            // reset option for submit button
            $("#screen22 > .main_slide > .side_btn").removeAttr('option');
        },

        async animateCss() {
            let duration = 0.8;

            // animate main slide
            $("#screen22 > .main_slide").css({
                display: 'block',
                opacity: 1
            });

            // animate slide toggle
            gsap.to("#screen22 > .main_slide > .slide_toggle", {
                display: 'block',
                opacity: 1,
                right: '0px',
                delay: 1,
                duration
            });

            // animate side btn
            await gsap.to("#screen22 > .main_slide > .side_btn", {
                display: 'block',
                opacity: 1,
                left: '1593px',
                delay: 1,
                duration
            });

            // animate bottom text
            await gsap.to("#screen22 > .main_slide > .bot_text", {
                right: '147px',
                opacity: 1,
                duration,
                onComplete: () => {
                    // animate pointer-evetns for slide toggle options
                    $("#screen22 > .main_slide > .slide_toggle > .options").css({
                        'pointer-events': 'auto'
                    });
                }
            })
        }
    }

    let screen23 = {
        get parentDiv() {
            return $("#screen23");
        },

        show() {
            screen = '23';
            this.resetCss();
            screenShowHide(".screen:not(#screen23)", this.parentDiv);
            this.animateCss();
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            enableBack();
            disableNext();
            enableNext(); // enable next only if next screen is already visited

            // reset center
            $("#screen23 > .center").css({
                display: 'none',
                opacity: 0
            });

            // reset mid line
            await gsap.to("#screen23 > .center > .line", {
                scaleY: 0,
                duration: 0
            });

            // reset left heading
            $("#screen23 > .center > .lefttext1").css({
                opacity: 0
            });

            // reset left mid text
            $("#screen23 > .center > .lefttext2").css({
                opacity: 0
            });

            // reset left bottom text
            $("#screen23 > .center > .lefttext3").css({
                opacity: 0
            });

            // reset right heading
            $("#screen23 > .center > .righttext").css({
                opacity: 0
            });

            // reset rightline
            $("#screen23 > .center > .rightline").css({
                height: '0px'
                // height: '86px'
            });

            // reset rightcircle
            gsap.to("#screen23 > .center > .rightcircle", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            // reset righttext1
            $("#screen23 > .center > .righttext1").css({
                opacity: 0
            });

            // reset rightcircle1
            gsap.to("#screen23 > .center > .rightcircle1", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            // reset righttext2
            $("#screen23 > .center > .righttext2").css({
                opacity: 0
            });

            // reset rightcircle2
            gsap.to("#screen23 > .center > .rightcircle2", {
                scaleX: 0,
                scaleY: 0,
                duration: 0
            });

            // reset righttext3
            $("#screen23 > .center > .righttext3").css({
                opacity: 0
            });

            // reset centertext and centertex1
            $("#screen23 > .center > .centertext, #screen23 > .center > .centertext1").css({
                opacity: 0
            });

            // reset s23_btn
            $("#screen23 > .center > .s23_btn").css({
                'pointer-events': 'none',
                opacity: 0
            })
        },

        async animateCss() {
            let duration = 0.8,
                opacity = 1;

            // animate center
            await gsap.to("#screen23 > .center", {
                display: 'block',
                opacity,
                duration
            });

            // animate mid line
            await gsap.to("#screen23 > .center > .line", {
                scaleY: 1,
                duration
            });

            // animate left heading
            await gsap.to("#screen23 > .center > .lefttext1", {
                opacity,
                duration
            });

            // animate left mid and left bottom text
            await Promise.all([
                gsap.to("#screen23 > .center > .lefttext2", {
                    opacity,
                    duration
                }),
                gsap.to("#screen23 > .center > .lefttext3", {
                    opacity,
                    duration
                })
            ]);

            // animate right heading
            await gsap.to("#screen23 > .center > .righttext", {
                opacity,
                duration
            });

            // animate rightline
            await gsap.to("#screen23 > .center > .rightline", {
                height: '86px',
                duration
            });

            // animate rightcircle and righttext1
            await Promise.all([
                gsap.to("#screen23 > .center > .rightcircle", {
                    scaleX: 1,
                    scaleY: 1,
                    duration
                }),
                gsap.to("#screen23 > .center > .righttext1", {
                    opacity,
                    duration
                })
            ]);

            // animate rightcircle1 and righttext2
            await Promise.all([
                gsap.to("#screen23 > .center > .rightcircle1", {
                    scaleX: 1,
                    scaleY: 1,
                    duration
                }),
                gsap.to("#screen23 > .center > .righttext2", {
                    opacity,
                    duration
                })
            ]);

            // animate rightcircle2 and righttext3
            await Promise.all([
                gsap.to("#screen23 > .center > .rightcircle2", {
                    scaleX: 1,
                    scaleY: 1,
                    duration
                }),
                gsap.to("#screen23 > .center > .righttext3", {
                    opacity,
                    duration
                })
            ]);

            // animate centertext and centertext1
            await Promise.all([
                gsap.to("#screen23 > .center > .centertext", {
                    opacity,
                    duration
                }),
                gsap.to("#screen23 > .center > .centertext1", {
                    opacity,
                    duration
                })
            ]);

            // animate s23_btn
            await gsap.to("#screen23 > .center > .s23_btn", {
                opacity,
                duration,
                onComplete: () => {
                    $("#screen23 > .center > .s23_btn").css({
                        'pointer-events': 'auto'
                    });

                    $("#screen23 > .center > .s23_btn").on('click', e => {
                        e.stopImmediatePropagation();
                        screen24.show();
                    });

                    enableNext(true);
                }
            })
        }
    }

    let screen24 = {
        get parentDiv() {
            return $("#screen24");
        },

        show() {
            screen = '24';
            this.resetCss();
            screenShowHide(".screen:not(#screen24)", this.parentDiv);
            this.animateCss();
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            enableBack();
            disableNext();
            enableNext(); // enable next only if next screen is already visited

            // reset mid_pop
            await gsap.to("#screen24 > .s24_mid_pop", {
                scaleX: 0,
                duration: 0
            });

            // reset character
            $("#screen24 > .s24_character").css({
                opacity: 0,
                duration: 0,
                left: '-440px',
                // left: '146px'
            });

            // reset lungs and text1
            $("#screen24 > .s24_lungs, #screen24 > .text1").css({
                opacity: 0,
                duration: 0
            });

            // resetting text2
            $("#screen24 > .text2").css({
                opacity: 0
            });

            // resetting text3
            $("#screen24 > .text3").css({
                opacity: 0
            });

            // resetting text4
            $("#screen24 > .text4").css({
                opacity: 0
            });

            // resetting s24_btn
            $("#screen24 > .s24_btn").css({
                'pointer-events': 'none',
                opacity: 0
            });
        },

        async animateCss() {
            let duration = 0.8,
                opacity = 1;

            await Promise.all([
                // animate mid pop
                gsap.to("#screen24 > .s24_mid_pop", {
                    scaleX: 1,
                    duration
                }),
                // animate character
                gsap.to("#screen24 > .s24_character", {
                    left: '146px',
                    opacity,
                    duration,
                })
            ]);

            await Promise.all([
                // animating lungs
                gsap.to("#screen24 > .s24_lungs", {
                    opacity,
                    duration
                }),
                // animate text1
                gsap.to("#screen24 > .text1", {
                    opacity,
                    duration
                }),
            ]);

            // animate text2
            await gsap.to("#screen24 > .text2", {
                opacity,
                duration
            });

            // animate text3
            await gsap.to("#screen24 > .text3", {
                opacity,
                duration
            });

            // animate text4
            await gsap.to("#screen24 > .text4", {
                opacity,
                duration
            });

            await gsap.to("#screen24 > .s24_btn", {

                opacity,
                duration,
                onComplete: () => {
                    $("#screen24 > .s24_btn").css({
                        'pointer-events': 'auto'
                    });

                    $("#screen24 > .s24_btn").on('click', e => {
                        e.stopImmediatePropagation();
                        screen25.show();
                    });

                    enableNext(true);
                }
            })

        }
    }

    let screen25 = {
        get parentDiv() {
            return $("#screen25");
        },

        show() {
            screen = '25';
            this.resetCss();
            screenShowHide(".screen:not(#screen25)", this.parentDiv);

            // hiding top and bottom nav
            $("#global_menu > .top_nav, #global_menu > .bottom_nav").css({
                display: 'none',
                opacity: 0
            });

            // click for mclick1
            function handleClickHome(e) {
                e.stopImmediatePropagation();

                screen7.show(true);
            }

            $("#screen25 > .box > .mclick1").on('click', handleClickHome);

            // click for mclick2
            function handleClickClose(e) {
                e.stopImmediatePropagation();
                window.close();
            }
            $("#screen25 > .box > .mclick2").on('click', handleClickClose);
        },

        async resetCss() {
            console.log('resetCss');
            if (timeout) clearTimeout(timeout);
            timeout = null;
            gsap.killTweensOf('*');

            changeBottomLeftText();

            // enableBack();
            // disableBack();
            // disableNext();
            // enableNext(); // enable next only if next screen is already visited
        },
    }

    // remove this later
    // screen21.show();
    // // showing top and bottom nav
    // $("#global_menu > .top_nav, #global_menu > .bottom_nav").css({
    //     display: 'flex',
    //     opacity: 1
    // });

    //to reset the screen 4
    function resetScreen4() {
        $(animQueue, animQueue1, animQueue2, animQueue3).stop();
        $("#screen4 img").css("top", "300px").css("opacity", "0");
        $("#screen4 .line1").css("right", "16px").css("opacity", "0");
        $("#screen4 .line2").css("left", "350px").css("opacity", "0");
        $("#screen4 .line3").css("opacity", "0")
        $("#screen4 .screen4_inizia_btn").css("bottom", "-16px").css("opacity", "0");
        $("#screen4").css("display", "none").css("opacity", "0");
        // $("#next_btn,#back_btn").addClass("disable");
        // $("#next_btn").addClass("disable");
        disableNext();
        $("#global_menu .bottom_nav,#global_menu .top_nav").css("display", "none");

        // clear timeout
        if (timeout) clearTimeout(timeout);
        if (timeout1) clearTimeout(timeout1);
        if (timeout2) clearTimeout(timeout2);
        if (timeout3) clearTimeout(timeout3);
        timeout = timeout1 = timeout2 = timeout3 = null;
    }

    $("#screen6 .p-click").hover(function () {
        $(this).addClass("active");
        $(this).children().addClass("active");
    })

    $("#screen6 .p-click").mouseout(function () {
        $(this).removeClass("active");
        $(this).children().removeClass("active");
    })
    //screen 3 inizia button
    $(".inizia_btn").click(function () {
        screen4show();
    });

    //screen 4 inizia button
    $(".screen4_inizia_btn").click(function () {
        // screen5show();
        screen5.show();
    });

    $("#exit_screen .exit_yes").click(function () {
        window.close();
    });

    $("#global_menu #exit_btn").click(async function () {
        await pauseAllAnimations();
        $("#exit_screen").css("display", "block");
        $("#exit_screen").animate({
            opacity: 1
        }, 500);
    });

    async function screen6extension() {
        // tween = gsap.to("#screen6 #p-click4", {
        //     scaleX: 1,
        //     scaleY: 1,
        //     opacity: 1,
        //     duration: 0.8
        // });
        // $("#screen6 .bot_text1").animate({
        //     opacity: 1,
        //     right: "273px"
        // }, 800);
        // enableNext(true);


        enableNext(true);

        await gsap.to("#screen6 #p-click4", {
            display: 'flex',
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            duration: 0.8
        });

        await gsap.to("#screen6 .bot_text1", {
            display: 'block',
            opacity: 1,
            right: "273px",
            duration: 0.8
        });
    }


    $("#exit_screen .exit_no").click(function () {
        $("#exit_screen").animate({
            opacity: 0
        }, 500, async function () {
            $("#exit_screen").css("display", "none");

            if ($("#global_menu > .bottom_nav > #pause_play_btn").hasClass('pausestate')) await resumeAllAnimations();
        });
    })

    $('#screen6 .p-click').on('click', function () {
        if ($(this).attr("id") == "p-click4") {
            screen7.show();
        } else {
            let x = $(this).children()[0].id;
            $("#" + x).addClass("done");
            return openPopup($(this).attr('target'));
        }
    });

    function openPopup(_popup_id) {
        var _popup = '#' + _popup_id;
        $(".s9_btn").css("opacity", "0").css("display", "none");
        $(_popup).addClass('active');
        $(_popup).animate({
            opacity: 1
        }, 500);
        $(".s6_character").addClass("addzindex");
        timeout = setTimeout(function () {
            $(".s9_btn").css("display", "block");
            $(".s9_btn").animate({
                opacity: 1
            }, 800);
        }, 3000)
        return false;
    }

    //function for screen6 clode popup
    $(".s9_btn").click(function () {
        $(".screen6-popup").animate({
            opacity: 0
        }, 500, function () {
            $(".screen6-popup").removeClass("active");
            $(".s6_character").removeClass("addzindex");
        });

        if ($("#p-image1").hasClass("done") && $("#p-image2").hasClass("done") && $("#p-image3").hasClass("done")) {
            screen6extension();
        }
    })
});