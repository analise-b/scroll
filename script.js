window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    let message4 = document.querySelector(".message4");
    let message5 = document.querySelector(".message5");
    let delivered = document.querySelector(".delivered");
    let typing = document.querySelector(".typing");
    let intro = document.querySelector(".intro");

    let triggerPoint1 = 800;
    let triggerPoint2 = 3000;
    let triggerPoint3 = 5000;
    let triggerPoint4 = 8000;
    let endScroll = 11000;

    if (scrollPosition < endScroll) {
        intro.style.position = "fixed";
    } else {
        intro.style.position = "relative";
    }

    message4.style.opacity = scrollPosition >= triggerPoint1 ? 1 : 0;
    message5.style.opacity = scrollPosition >= triggerPoint2 ? 1 : 0;
    delivered.style.opacity = scrollPosition >= triggerPoint3 ? 1 : 0;
    typing.style.opacity = scrollPosition >= triggerPoint4 ? 1 : 0;

    let adjustedScroll = scrollPosition - endScroll;
    let sky2 = document.querySelector(".sky2");
    let sky3 = document.querySelector(".sky3");
    let sky4 = document.querySelector(".sky4");
    let sky5 = document.querySelector(".sky5");
    let sky6 = document.querySelector(".sky6");
    let sky7 = document.querySelector(".sky7");
    let sky8 = document.querySelector(".sky8");
    let sky9 = document.querySelector(".sky9");
    let sky10 = document.querySelector(".sky10");

    sky2.style.opacity = adjustedScroll >= 100 ? 1 : 0;
    sky3.style.opacity = adjustedScroll >= 600 ? 1 : 0;
    sky4.style.opacity = adjustedScroll >= 800 ? 1 : 0;
    sky5.style.opacity = adjustedScroll >= 1000 ? 1 : 0;
    sky6.style.opacity = adjustedScroll >= 1200 ? 1 : 0;
    sky7.style.opacity = adjustedScroll >= 1400 ? 1 : 0;
    sky8.style.opacity = adjustedScroll >= 1800 ? 1 : 0;
    sky9.style.opacity = adjustedScroll >= 2000 ? 1 : 0;
    sky10.style.opacity = adjustedScroll >= 2200 ? 1 : 0;

    let section1 = document.querySelector(".section1");
    let nettleham = document.querySelector(".nettleham");
    let showSection = 14700;
    let startFadeIn = 14900;
    let endFixed = 18000;

    if (scrollPosition >= showSection) {
        section1.style.position = "fixed";
        section1.style.top = "0";
    } else {
        section1.style.position = "absolute";
        section1.style.top = "14700px";
    }

    nettleham.style.opacity = scrollPosition >= startFadeIn ? 1 : 0;

    if (scrollPosition >= endFixed) {
        section1.style.position = "absolute";
        section1.style.top = `${endFixed}px`;
    }

    let section2 = document.querySelector(".section2");
    let photos1 = document.querySelector(".photos1");
    let group1 = document.querySelector(".group1");
    let photos2 = document.querySelector(".photos2");
    let group2 = document.querySelector(".group2");
    let showSection2 = 19000;

    if (scrollPosition >= showSection2) {
        section2.style.position = "fixed";
        section2.style.top = "0";
    } else {
        section2.style.position = "absolute";
        section2.style.top = "18200px";
    }

    photos1.style.opacity = scrollPosition >= 19200 ? 1 : 0;
    group1.style.opacity = scrollPosition >= 21000 ? 1 : 0;
    photos1.style.opacity = scrollPosition >= 21000 ? 0 : photos1.style.opacity;
    group1.style.opacity = scrollPosition >= 23000 ? 0 : group1.style.opacity;
    
    photos2.style.opacity = scrollPosition >= 24000 ? 1 : 0;
    group2.style.opacity = scrollPosition >= 25000 ? 1 : 0;
    photos2.style.opacity = scrollPosition >= 25000 ? 0 : photos2.style.opacity;
    group2.style.opacity = scrollPosition >= 28000 ? 0 : group2.style.opacity;

    let stLouis = document.querySelector(".stLouis");
    stLouis.style.opacity = scrollPosition >= 28100 ? 1 : 0;
    stLouis.style.opacity = scrollPosition >= 30000 ? 0 : stLouis.style.opacity;

    let photos3 = document.querySelector(".photos3");
    let group3 = document.querySelector(".group3");
    photos3.style.opacity = scrollPosition >= 30500 ? 1 : 0;
    group3.style.opacity = scrollPosition >= 32000 ? 1 : 0;
    photos3.style.opacity = scrollPosition >= 32000 ? 0 : photos3.style.opacity;
    group3.style.opacity = scrollPosition >= 34000 ? 0 : group3.style.opacity;

    let allSky = document.querySelector(".allSky");
    allSky.style.opacity = scrollPosition >= 34500 ? 1 : 0;
    allSky.style.opacity = scrollPosition >= 38000 ? 0 : allSky.style.opacity;

    let map1 = document.querySelector(".map1");
    let map2 = document.querySelector(".map2");
    map1.style.opacity = scrollPosition >= 38500 ? 1 : 0;
    map2.style.opacity = scrollPosition >= 40000 ? 1 : 0;
    map1.style.opacity = scrollPosition >= 40000 ? 0 : map1.style.opacity;
    map2.style.opacity = scrollPosition >= 42000 ? 0 : map2.style.opacity;

    let map3 = document.querySelector(".map3");
    let map4 = document.querySelector(".map4");
    map3.style.opacity = scrollPosition >= 42000 ? 1 : 0;
    map4.style.opacity = scrollPosition >= 44000 ? 1 : 0;
    map3.style.opacity = scrollPosition >= 44000 ? 0 : map3.style.opacity;
    map4.style.opacity = scrollPosition >= 46000 ? 0 : map4.style.opacity;

    let map5 = document.querySelector(".map5");
    let map6 = document.querySelector(".map6");
    map5.style.opacity = scrollPosition >= 46000 ? 1 : 0;
    map6.style.opacity = scrollPosition >= 48000 ? 1 : 0;
    map5.style.opacity = scrollPosition >= 48000 ? 0 : map5.style.opacity;
    map6.style.opacity = scrollPosition >= 50000 ? 0 : map6.style.opacity;

    let map7 = document.querySelector(".map7");
    let map8 = document.querySelector(".map8");
    map7.style.opacity = scrollPosition >= 50000 ? 1 : 0;
    map8.style.opacity = scrollPosition >= 52000 ? 1 : 0;
    map7.style.opacity = scrollPosition >= 52000 ? 0 : map7.style.opacity;
    map8.style.opacity = scrollPosition >= 54000 ? 0 : map8.style.opacity;

    let map9 = document.querySelector(".map9");
    let map10 = document.querySelector(".map10");
    map9.style.opacity = scrollPosition >= 54000 ? 1 : 0;
    map10.style.opacity = scrollPosition >= 56000 ? 1 : 0;
    map9.style.opacity = scrollPosition >= 56000 ? 0 : map9.style.opacity;
    map10.style.opacity = scrollPosition >= 58000 ? 0 : map10.style.opacity;

    let map11 = document.querySelector(".map11");
    let map12 = document.querySelector(".map12");
    map11.style.opacity = scrollPosition >= 58000 ? 1 : 0;
    map12.style.opacity = scrollPosition >= 60000 ? 1 : 0;
    map11.style.opacity = scrollPosition >= 60000 ? 0 : map11.style.opacity;
    map12.style.opacity = scrollPosition >= 62000 ? 0 : map12.style.opacity;

    let map13 = document.querySelector(".map13");
    let map14 = document.querySelector(".map14");
    map13.style.opacity = scrollPosition >= 62000 ? 1 : 0;
    map14.style.opacity = scrollPosition >= 64000 ? 1 : 0;
    map13.style.opacity = scrollPosition >= 64000 ? 0 : map13.style.opacity;
    map14.style.opacity = scrollPosition >= 66000 ? 0 : map14.style.opacity;

    let map15 = document.querySelector(".map15");
    let map16 = document.querySelector(".map16");
    map15.style.opacity = scrollPosition >= 66000 ? 1 : 0;
    map16.style.opacity = scrollPosition >= 68000 ? 1 : 0;
    map15.style.opacity = scrollPosition >= 68000 ? 0 : map15.style.opacity;
    map16.style.opacity = scrollPosition >= 70000 ? 0 : map16.style.opacity;

    let map17 = document.querySelector(".map17");
    map17.style.opacity = scrollPosition >= 70000 ? 1 : 0;
    map17.style.opacity = scrollPosition >= 72000 ? 0 : map17.style.opacity;

    let final = document.querySelector(".final");
    final.style.opacity = scrollPosition >= 72000 ? 1 : 0;
    final.style.opacity = scrollPosition >= 74000 ? 0 : final.style.opacity;

});