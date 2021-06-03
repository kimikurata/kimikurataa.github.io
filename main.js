(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Xrb":
/*!************************************************!*\
  !*** ./src/app/tipython/tipython.component.ts ***!
  \************************************************/
/*! exports provided: TipythonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipythonComponent", function() { return TipythonComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-sticky-nav */ "Bq3M");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _project_thumbs_project_thumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-thumbs/project-thumbs.component */ "vLWJ");




class TipythonComponent {
    constructor() {
        this.selectedLink = '';
    }
    ngOnInit() {
    }
    onWindowScroll() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const el = document.scrollingElement || document.documentElement;
        // Useful for debugging. Helps the developer to figure out the right breakpoint for each of the parts of the top
        // navigation menu.
        console.log(el.scrollTop);
        const section1Offset = (_b = (_a = document.getElementById('section1')) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0;
        const section2Offset = (_d = (_c = document.getElementById('section2')) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0;
        const section3Offset = (_f = (_e = document.getElementById('section3')) === null || _e === void 0 ? void 0 : _e.offsetTop) !== null && _f !== void 0 ? _f : 0;
        const section4Offset = (_h = (_g = document.getElementById('section4')) === null || _g === void 0 ? void 0 : _g.offsetTop) !== null && _h !== void 0 ? _h : 0;
        const section5Offset = (_k = (_j = document.getElementById('section5')) === null || _j === void 0 ? void 0 : _j.offsetTop) !== null && _k !== void 0 ? _k : 0;
        if (el.scrollTop >= section4Offset - 100) {
            this.selectedLink = 'four';
        }
        else if (el.scrollTop >= section3Offset - 100) {
            this.selectedLink = 'three';
        }
        else if (el.scrollTop >= section2Offset - 100) {
            this.selectedLink = 'two';
        }
        else if (el.scrollTop >= section1Offset - 100) {
            this.selectedLink = 'one';
        }
        else {
            this.selectedLink = '-';
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_active .circle").each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(this).css({ 'background-color': 'cadetblue' });
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_active .progress_title").each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(this).css({ 'color': 'cadetblue' });
            });
        });
        if (el.scrollTop > 1300) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".progress_title").css({ 'font-size': '.8em', 'color': '#9fa6a9', 'font-weight': '500' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".circle").css({ 'width': '25px', 'height': '25px', 'border': 'none', 'background-color': '#BBBBBB', 'color': 'white', 'font-weight': '200', 'font-size': '0.8em' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".stiky_nav_title").css({ 'color': 'rgba(60, 60, 60, 0)', 'font-size': '2em', 'font-weight': '500', 'letter-spacing': '0.5px', 'margin-bottom': '65px' });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".progress_title").css({ 'font-size': '.9em', 'color': '#515151', 'font-weight': '700' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".circle").css({ 'width': '45px', 'height': '45px', 'border': '2px solid #BBBBBB', 'background-color': 'transparent', 'color': '#BBBBBB', 'font-weight': '700', 'font-size': '1.3em' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".stiky_nav_title").css({ 'color': 'rgba(60, 60, 60, 1)', 'font-size': '2em', 'font-weight': '500', 'letter-spacing': '0.5px', 'margin-bottom': '65px' });
        }
        if (el.scrollTop > section5Offset) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_nav").css({ 'visibility': 'hidden' });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_nav").css({ 'visibility': 'visible' });
        }
    }
    markSelected(selectedLink) {
        this.selectedLink = selectedLink;
    }
}
TipythonComponent.ɵfac = function TipythonComponent_Factory(t) { return new (t || TipythonComponent)(); };
TipythonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TipythonComponent, selectors: [["app-tipython"]], hostBindings: function TipythonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function TipythonComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 178, vars: 9, consts: [[1, "container"], [1, "flex-row-center-center", "bottom-padding-md"], [1, "content-box", "flex-grow1_0"], [1, ""], [1, "top-padding-xs"], [1, "top-image-box", "flex-grow1_0"], ["src", "../../assets/images/tipython/ti83top.png", "alt", "ti calcuator 83", 1, "image-contain"], [1, "neutral_light_bg", "top-padding-lg", "bottom-padding-lg"], [1, "flex-row-between-start"], [1, "top-image-box2", "flex-grow2_0"], ["src", "../../assets/images/tipython/ti83adapter.png", "alt", "ti calcuator 83", 1, "image-contain"], [1, "content-box2", "flex-grow1_0"], [1, "body_text_sm"], [1, "top-padding-md"], [1, "progress_bar_box", "mpadding"], [1, "h2title", "stiky_nav_title", "top-padding-lg"], ["ngStickyNav", "", "stickyClass", "sticky-box-shadow", 1, "sticky_nav", "navbar"], ["href", "/tipython#section1", "target", "_self", 1, "sticky_nav_item", 3, "click"], [1, "sticky_content"], [1, "circle"], [1, "progress_title"], ["href", "/tipython#section2", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["href", "/tipython#section3", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["href", "/tipython#section4", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["id", "section1", 1, "container"], [1, "bottom-padding-md", "top-padding-lg"], [1, "body_text_md", "bottom-padding-sm"], [1, "product-goals-box", "bottom-padding-md"], ["src", "../../assets/images/tipython/product-goals.png", "alt", "product goals", 1, "image-contain"], [1, "flex-col-center-center", "neutral_light_bg"], [1, "text-center", "top-padding-lg"], [1, "bottom-padding-lg"], [1, "body_text_md", "bottom-padding-md", "top-padding-lg"], [1, "product-goals-box", "bottom-padding-lg"], ["src", "../../assets/images/tipython/ti83-transformation.png", "alt", "product goals", 1, "image-contain"], ["id", "section2", 1, "container"], [1, "bottom-padding-md"], [1, "bottom-padding-sm"], ["src", "../../assets/images/tipython/fist-mockup.png", "alt", "product goals", 1, "image-contain", "image-within-text", 2, "padding-right", "3em"], [1, "pain-point-list"], [1, "body_text_md", "bottom-padding-md"], ["src", "../../assets/images/tipython/code-editors.png", "alt", "code editors", 1, "image-contain"], ["id", "section3", 1, "container"], ["src", "../../assets/images/tipython/after_ti83.png", "alt", "proposal", 1, "image-contain"], [1, "flex-row-start-center"], [1, "number-circle", "flex-row-center-center"], [1, "change-number"], [1, "text-bold", "top-changes-title"], [1, "change-description"], [1, "lef-row-center-center", "bottom-margin-sm"], ["src", "../../assets/images/tipython/change1.png", "alt", "proposal1", 1, "image-contain"], [1, "lef-row-center-center", "bottom-margin-md", "top-margin-md"], ["src", "../../assets/images/tipython/change2.png", "alt", "proposal2", 1, "image-contain"], ["src", "../../assets/images/tipython/change3.png", "alt", "proposal3", 1, "image-contain"], ["src", "../../assets/images/tipython/change4.png", "alt", "proposal4", 1, "image-contain"], ["src", "../../assets/images/tipython/change41.png", "alt", "proposal41", 1, "image-contain"], [1, "lef-row-center-center", "bottom-margin-lg", "top-margin-md"], ["src", "../../assets/images/tipython/change5.png", "alt", "proposal5", 1, "image-contain"], ["id", "section4", 1, "neutral_light_bg", "top-padding-lg", "bottom-padding-lg"], [1, "imp-text", "flex-grow1_0"], [1, "top-image-box2", "flex-grow1_0"], ["src", "../../assets/images/tipython/font-anatomy.png", "alt", "font anatomy", 1, "image-contain"], [1, "flex-row-center-center", "bottom-padding-md", "top-padding-md"], ["src", "../../assets/images/tipython/new-font.png", "alt", "new font", 1, "image-contain", "new-font-image"], ["id", "section5", 1, "final-result-box"], [1, "result-title"], ["src", "../../assets/images/tipython/ti83-final.png", "alt", "result", 1, "image-contain"], [1, "top-padding-lg"], [3, "excludedItems"]], template: function TipythonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Introducing Python to future generations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "TI - Python adapter for TI-83 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Premium CE calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "P", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "TI - Python adapter is a solution that allows teachers and students to program in Python on the TI-83 Premium CE calculator. This project initially started as an external plugin accessory for the company\u2019s best-seller product.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "My Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "P", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "As part of the research team for the new product developments; I was given the task to identify key visual aspects that could elevate the coding learning experience for this product.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Design process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nav", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TipythonComponent_Template_a_click_29_listener() { return ctx.markSelected("one"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Product Goal Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TipythonComponent_Template_a_click_35_listener() { return ctx.markSelected("two"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TipythonComponent_Template_a_click_41_listener() { return ctx.markSelected("three"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "New Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TipythonComponent_Template_a_click_47_listener() { return ctx.markSelected("four"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Imlementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Product Goal Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "As a completely new feature for this product, it was very important to understand the following 3 parts of the product: the user needs, the company\u2019s business goals, and the product goals with their constraints. The process for this project started with putting together these 3 parts:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Design problem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " \u201CTransform the current Note editor into a Python script editor.\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Fortunately, we didn't have to start this product from scratch; the calculator already had a feature called \u201DNote editor\u201D that we could be used as a starting point. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "User research");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Looking for areas of opportunities to improve the user experience of the product, the team decided to create a high-fidelity mockup typing a short python script in the already existing \u201CNote editor\u201D feature. The purpose of this mockup was to get some feedback from python developers and perform a heuristic evaluation. Here are the top 5 user pain points that were identified during the user research. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ol", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "The indentation is not clear.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Lower case letters with descenders like \u201Cp\u201D and \u201Cy\u201D look uppercased.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "The overflow wrapped-words are hard to read.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Scrolling down through all the code is cumbersome.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "The code is hard to understand when the text is all in one color.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Since graphing calculators have a custom screen size; we looked for similar code editor apps for smartphones to analyze how they treat code strings on small-size screens. This gave us the idea of how to solve some of the user pain points and led us to the final design proposal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "New Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Top 5 changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Add an indicator for line wrapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Leave 5 blank spaces when the text is wrapped.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Improve indentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Use square symbol as an indentation indicator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Include bottom menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Reserve the last 20 pixels to display the bottom menu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Apply a new font size that supports descenders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Help the user read more words horizontally by using the new CE Medium font size that supports up to 32 characters across the screen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "letters with descenders like \u201Cp\u201D, \u201Cq\u201D, \u201Cy\u201D, \u201Cj\u201D are now aligned correctly. Fixing this font anatomy would improve the legibility of the calculator. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Use text color for reserved keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " It is easier for a Python learner to remember keywords when they are displayed with different colors. Use blue, red, green, and gray for the following categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, " My biggest contribution to the implementation of the project was the creation of the NEW font. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " The new font size improved the user experience while writing and reading code. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "h1", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Final Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "h1", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Other projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "app-project-thumbs", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "one");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "two");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "three");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "four");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("excludedItems", 2);
    } }, directives: [ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_2__["StickyNavDirective"], _project_thumbs_project_thumbs_component__WEBPACK_IMPORTED_MODULE_3__["ProjectThumbsComponent"]], styles: [".content-box[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.top-image-box[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.content-box2[_ngcontent-%COMP%] {\n  max-width: 345px;\n}\n\n.top-image-box2[_ngcontent-%COMP%] {\n  max-width: 350px;\n}\n\n.progress_bar_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.sticky_nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  width: 60%;\n  float: left;\n  padding: 5px;\n  background: none;\n  margin-bottom: 20px;\n}\n\n.sticky_nav_item[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.stiky_nav_title[_ngcontent-%COMP%] {\n  margin-bottom: 65px;\n  margin: 130px, 0px;\n  transition: 0.2s;\n}\n\n.sticky_content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 2px solid #BBBBBB;\n  background-color: none;\n  color: #BBBBBB;\n  font-weight: 700;\n  font-size: 1em;\n  transition: 0.5s;\n}\n\n.progress_title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-decoration: none;\n  font-size: 1.3em;\n  font-weight: 700;\n  color: #515151;\n  letter-spacing: 0.5px;\n  line-height: normal;\n  transition: 0.5s;\n  text-align: center;\n}\n\na.sticky_nav_item[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.sticky-box-shadow[_ngcontent-%COMP%] {\n  width: 65%;\n  background: white !important;\n  border-radius: 5px;\n  z-index: 10;\n  padding: 0px;\n}\n\n@media screen and (max-width: 800px) {\n  .sticky-box-shadow[_ngcontent-%COMP%] {\n    width: 100%;\n    background: white !important;\n    border-radius: 0px;\n    z-index: 11;\n  }\n\n  .sticky_nav[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.product-goals-box[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.image-within-text[_ngcontent-%COMP%] {\n  width: 350px;\n  float: left;\n}\n\n.pain-point-list[_ngcontent-%COMP%] {\n  font-size: 1.28em;\n  font-weight: 300;\n  letter-spacing: 0.5px;\n  line-height: 1.6;\n  color: var(--color-black);\n}\n\n.pain-point-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-top: 1em;\n  margin: 2.5em 0em;\n}\n\n.number-circle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 3em;\n  height: 3em;\n  border-radius: 50%;\n  border: 3px solid var(--color-black);\n  margin-right: 1em;\n}\n\n.change-number[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 800;\n  text-align: center;\n  vertical-align: middle;\n  margin-block-start: 0em;\n  margin-block-end: 0em;\n  color: var(--color-black);\n}\n\n.top-changes-title[_ngcontent-%COMP%] {\n  margin-block-start: 0em;\n  margin-block-end: 0em;\n}\n\n.change-description[_ngcontent-%COMP%] {\n  margin-left: 3.5em;\n}\n\n.imp-text[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n\n.new-font-image[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.result-title[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  margin-top: var(--space-sm);\n  padding-top: var(--space-md);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RpcHl0aG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUlBO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsNEJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUFETjs7RUFHRTtJQUNJLFdBQUE7RUFBTjtBQUNGOztBQUtBO0VBQ0ksV0FBQTtBQUhKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFGSjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBSUoiLCJmaWxlIjoidGlweXRob24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1ib3h7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4udG9wLWltYWdlLWJveHtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbi5jb250ZW50LWJveDJ7XG4gICAgbWF4LXdpZHRoOiAzNDVweDtcbn1cblxuLnRvcC1pbWFnZS1ib3gye1xuICAgIG1heC13aWR0aDogMzUwcHg7XG59XG5cbi8vIHN0aWNreSBwcm9ncmVzcyBiYXIgY3NzIFNUQVJULS0tLS0tLS0tLS0tXG5cbi5wcm9ncmVzc19iYXJfYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbn1cblxuLnN0aWNreV9uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgXG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDpub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zdGlja3lfbmF2X2l0ZW17XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xufVxuXG4uc3Rpa3lfbmF2X3RpdGxle1xuICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XG4gICAgbWFyZ2luOiAxMzBweCwgMHB4O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5zdGlja3lfY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNpcmNsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQkJCQkJCO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgY29sb3I6ICNCQkJCQkI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucHJvZ3Jlc3NfdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiM1MTUxNTE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEuc3RpY2t5X25hdl9pdGVte1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnN0aWNreS1ib3gtc2hhZG93IHtcbiAgd2lkdGg6IDY1JTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuc3RpY2t5LWJveC1zaGFkb3cge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgei1pbmRleDogMTE7XG4gICAgICB9XG4gICAgLnN0aWNreV9uYXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4vLyBzdGlja3kgcHJvZ3Jlc3MgYmFyIGNzcyBFTkQtLS0tLS0tLS0tLS0tLS1cblxuLnByb2R1Y3QtZ29hbHMtYm94e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmltYWdlLXdpdGhpbi10ZXh0e1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5wYWluLXBvaW50LWxpc3R7XG4gICAgZm9udC1zaXplOiAxLjI4ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBjb2xvcjp2YXIoLS1jb2xvci1ibGFjayk7XG59XG4ucGFpbi1wb2ludC1saXN0IGxpe1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgbWFyZ2luOiAyLjVlbSAwZW07XG5cbn1cbi5udW1iZXItY2lyY2xle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogM2VtO1xuICAgIGhlaWdodDogM2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1ibGFjayk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4uY2hhbmdlLW51bWJlcntcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xufVxuXG4udG9wLWNoYW5nZXMtdGl0bGV7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xufVxuLmNoYW5nZS1kZXNjcmlwdGlvbntcbiAgICBtYXJnaW4tbGVmdDogMy41ZW07XG59XG5cbi5pbXAtdGV4dCB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbi5uZXctZm9udC1pbWFnZXtcbiAgICB3aWR0aDogNDAwcHg7XG59XG4ucmVzdWx0LXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2Utc20pO1xuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjZS1tZCk7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/MariKurata/Desktop/portfolio-2021/portfolio2021visualstudio/portfolioV4/src/main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typewriter_text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typewriter-text.js */ "KYQy");
/* harmony import */ var _typewriter_text_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_typewriter_text_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AboutComponent {
    constructor() {
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]({});
        _typewriter_text_js__WEBPACK_IMPORTED_MODULE_1__();
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 23, vars: 0, consts: [[1, "about-bg"], [1, "container"], [1, "introduction-animation-box", "flex-row-start-center"], ["href", "", "data-period", "2000", "data-type", "[ \" a self-starter.\", \"a good listener.\", \"a problem solver.\" ]", 1, "typewrite"], [1, "wrap"], [1, "about-text-box"], [1, "top-padding-lg", "bottom-padding-md"], [1, "bottom-padding-sm"], [1, "bottom-padding-md"], [1, "bottom-padding-lg"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Hi, I'm \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "I\u2019m proud to say that I couldn\u2019t be happier to dedicate my professional life to the UI/UX field solving complex product design problems with innovation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " I feel pasionate about IoT and ambedded projects. This led me to pursue a Master\u2019s degree in Engineering specialied in native apps (ios and android ) and home automation projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "My motivations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "I have always been motivated by the desire to design for projects that make a big impact in society. I enjoy working with a multidisciplinary team. I believe that behind an impactful project, there is an austanting team capable of overcoming big challenges during the developing process. Finally, as a designer and team player, it is important to me to bring the users\u2019 voices to the table and facilitate human-oriented design decisions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "In my free time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "I enjoy crafting with beads, listening to Broadway musicals, and getting active doing Zumba and swimming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [".about-bg[_ngcontent-%COMP%] {\n  background-image: url('about-bg.png');\n  background-position: top right;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.about-text-box[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.introduction-animation-box[_ngcontent-%COMP%] {\n  padding-top: 50vh;\n}\n\n.typewrite[_ngcontent-%COMP%] {\n  text-decoration: none;\n  pointer-events: none;\n  color: var(--color-pure-black) !important;\n}\n\n@media screen and (max-width: 800px) {\n  .about-bg[_ngcontent-%COMP%] {\n    background-image: url('about-g-mobile.png');\n  }\n\n  .about-text-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .typewrite[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7QUFHSjs7QUFEQTtFQUNJO0lBQ0ksMkNBQUE7RUFJTjs7RUFGRTtJQUNJLFdBQUE7RUFLTjs7RUFIRTtJQUNJLGtCQUFBO0VBTU47QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1iZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2Fib3V0LWJnLnBuZyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLmFib3V0LXRleHQtYm94e1xuICAgIHdpZHRoOiA2MCU7XG59XG4uaW50cm9kdWN0aW9uLWFuaW1hdGlvbi1ib3h7XG4gICAgcGFkZGluZy10b3A6IDUwdmg7XG5cbn1cbi50eXBld3JpdGV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJlLWJsYWNrKSAgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmFib3V0LWJne1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2Fib3V0LWctbW9iaWxlLnBuZyk7XG4gICAgfVxuICAgIC5hYm91dC10ZXh0LWJveHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC50eXBld3JpdGV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH0iXX0= */"] });


/***/ }),

/***/ "8VDm":
/*!**************************************!*\
  !*** ./src/app/data/project-list.ts ***!
  \**************************************/
/*! exports provided: ProjectItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectItems", function() { return ProjectItems; });
const ProjectItems = [
    {
        "id": 1,
        title: "Making math and science easier to learn.",
        thumbnail: "nspire-thumbnail",
        link: "/tinspire",
    },
    {
        "id": 2,
        title: "Introducing Python to future generations.",
        thumbnail: "ti83-thumbnail",
        link: "/tipython",
    },
    {
        "id": 3,
        title: "Redesigning the WIZ app to increase smart light users.",
        thumbnail: "wiz-thumbnail",
        link: "/wizapp",
    },
    {
        "id": 4,
        title: "Reducing building enegy consumption.",
        thumbnail: "holidayinn-thumbnail",
        link: "/holidayinn",
    }
];


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]({});
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 74, vars: 0, consts: [[1, "container", "nav-height"], [1, "flex-row-between-center", "bottom-margin-lg", "top-margin-md"], [1, "flex-grow1_0", "itroduction-box"], [1, ""], [1, "introduction-text", "top-padding-md"], [1, "personal-links", "display-flex", "flex-align-center"], ["href", "../../assets/resume/mari_kurata_resume.pdf", "download", "", 1, "visitme_link"], [1, "separator"], ["href", "https://www.linkedin.com/in/mari-kurata", "target", "_blank", 1, "visitme_link"], [1, "headshot-box", "display-flex", "flex-grow1_2"], ["src", "../../assets/images/home/headshot.png", "alt", "headshot image", 1, "image-contain", "headshot"], [1, "section-bg", "top-padding-lg", "bottom-padding-lg"], [1, "container", "flex-row-between-center"], [1, "image_box1", "flex-grow1_0"], ["src", "../../assets/images/home/tinspire12.png", "alt", "ti calcuator", 1, "image-contain", "workimage12"], ["id", "wworkimage11", "data-aos", "fade-up", "data-aos-duration", "2000", "data-aos-anchor-placement", "center-center", "src", "../../assets/images/home/tinspire13.png", "alt", "ti calcuator", 1, "image-contain"], [1, "content-box", "flex-grow1_0"], [1, "top-padding-xs"], [2, "color", "var(--color-highlight)"], ["routerLink", "/tinspire", 1, "work_link"], [1, "top-padding-lg", "bottom-padding-lg"], ["routerLink", "/tipython", 1, "work_link"], ["src", "../../assets/images/home/ti8314.png", "alt", "ti calcuator 83", 1, "image-contain", "workimage12", 2, "z-index", "2"], ["id", "wworkimage11", "data-aos", "fade-up", "data-aos-duration", "2000", "data-aos-anchor-placement", "center-center", "src", "../../assets/images/home/ti8315.png", "alt", "ti calcuator 83", 1, "image-contain"], [1, "image_box3", "flex-grow1_0"], ["src", "../../assets/images/home/wizapp12.png", "alt", "ti calcuator", 1, "image-contain", "workimage32"], ["id", "wworkimage31", "data-aos", "fade-up", "data-aos-duration", "2000", "data-aos-anchor-placement", "center-center", "src", "../../assets/images/home/wizapp11.png", "alt", "ti calcuator", 1, "image-contain"], [1, "content-box", "flex-grow4_0", "content-box3"], ["routerLink", "/wizapp", 1, "work_link"], [1, "work4_box"], [1, "container"], [1, "titles_content4"], ["data-aos", "fade-up", "data-aos-duration", "2000", "data-aos-anchor-placement", "center-center", 1, "work-name"], ["data-aos", "fade-up", "data-aos-duration", "2600", "data-aos-anchor-placement", "center-center", 1, "key-words"], ["routerLink", "/holidayinn", "data-aos", "fade-up", "data-aos-duration", "3200", "data-aos-anchor-placement", "center-center", 1, "work_link"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "UI/UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SF, Bay Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "I enjoy looking for the most suitable solution to design problems always considering users, stakeholders and, the company\u2019s interest.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Making math and science easier to learn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "UI / UX design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Texas Instruments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Read case study \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Introducing Python to young generations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "UI / UX design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Texas Instruments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Read case study \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Redesigning the WIZ app to increase smart light users. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "UI / UX design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Individual Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Learn more \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Reducing building energy consumption.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "UI design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Holiday Inn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "See more details \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".itroduction-box[_ngcontent-%COMP%] {\n  width: 35%;\n}\n\n.introduction-text[_ngcontent-%COMP%] {\n  width: 97%;\n  margin-bottom: 25px;\n}\n\n.headshot[_ngcontent-%COMP%] {\n  width: 420px;\n  margin: auto;\n  flex-grow: 1.2;\n}\n\n.visitme_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: 0.5px;\n  color: #3C3C3C;\n  padding: 10px 20px 10px 0;\n}\n\n.visitme_link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 2px;\n  background: #000;\n  transition: width 0.3s ease-in;\n}\n\n.visitme_link[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n\n.visitme_link[_ngcontent-%COMP%]:last-child {\n  padding-left: 20px;\n}\n\n.separator[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 20px;\n  letter-spacing: 0.5px;\n  background-color: #3C3C3C;\n}\n\n@media screen and (max-width: 800px) {\n  .itroduction-box[_ngcontent-%COMP%] {\n    justify-content: center;\n    text-align: center;\n    padding-top: 15vh;\n  }\n\n  .personal-links[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .headshot-box[_ngcontent-%COMP%] {\n    margin-top: var(--space-sm);\n    flex-grow: 1;\n  }\n}\n\n.image_box1[_ngcontent-%COMP%] {\n  position: relative;\n  flex-grow: 1;\n  width: 300px;\n}\n\n.workimage12[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 300px;\n  object-fit: contain;\n}\n\n#wworkimage11[_ngcontent-%COMP%] {\n  width: 300px;\n  object-fit: contain;\n}\n\n.content-box[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n@media screen and (max-width: 800px) {\n  .image_box1[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .content-box[_ngcontent-%COMP%] {\n    margin-top: var(--space-sm);\n    width: 100%;\n    text-align: center;\n  }\n}\n\n.work_link[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  font-size: 1em;\n  font-weight: 200;\n  padding: 0px 10px 10px 0px;\n  letter-spacing: 0.5px;\n}\n\n.work_link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 2px;\n  background: var(--color-black);\n  transition: width 0.3s ease-in;\n}\n\n.work_link[_ngcontent-%COMP%]:hover::after, .work_link.selected[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n\n.content-box3[_ngcontent-%COMP%] {\n  max-width: 280px;\n}\n\n.image_box3[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 500px;\n}\n\n.workimage32[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 500px;\n  object-fit: contain;\n}\n\n@media screen and (max-width: 800px) {\n  .image_box3[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .content-box3[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin-top: var(--space-sm);\n    width: 100%;\n    text-align: center;\n  }\n}\n\n.work4_box[_ngcontent-%COMP%] {\n  padding-top: 130px;\n  padding-bottom: 130px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  background-image: url('holidayinn1.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  height: 80vh;\n}\n\n.titles_content4[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-grow: 1;\n  margin-right: 20px;\n}\n\n@media screen and (max-width: 800px) {\n  .work4_box[_ngcontent-%COMP%] {\n    background-position: right bottom;\n    background-size: 1000px;\n    height: 60vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFJSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFEQTtFQUNJLGtCQUFBO0FBSUo7O0FBREE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFEQTtFQUNJO0lBQ0UsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBSUo7O0VBRkU7SUFDSSx1QkFBQTtFQUtOOztFQUhFO0lBQ0ksMkJBQUE7SUFDQSxZQUFBO0VBTU47QUFDRjs7QUFKRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFNSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBREE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNHO0lBQ0MsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtFQUtGOztFQUZDO0lBQ0MsMkJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUFLSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FBSUo7O0FBREE7RUFDSSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJO0lBQ0MsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtFQU9IOztFQUpFO0lBQ0ksZ0JBQUE7SUFDSCwyQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQU9IO0FBQ0Y7O0FBSEM7RUFDRyxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJO0lBQ0ksaUNBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7RUFNTjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRyb2R1Y3Rpb24tYm94e1xuICAgIHdpZHRoOiAzNSU7XG59XG4uaW50cm9kdWN0aW9uLXRleHR7XG4gICAgd2lkdGg6IDk3JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmhlYWRzaG90e1xuICAgIHdpZHRoOiA0MjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZmxleC1ncm93OiAxLjI7XG59XG4udmlzaXRtZV9saW5re1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgY29sb3I6IzNDM0MzQztcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAwO1xufVxuXG4udmlzaXRtZV9saW5rOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuM3MgZWFzZS1pbjtcbn1cblxuLnZpc2l0bWVfbGluazpob3Zlcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udmlzaXRtZV9saW5rOmxhc3QtY2hpbGR7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uc2VwYXJhdG9ye1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzQzNDO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5pdHJvZHVjdGlvbi1ib3gge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogMTV2aDtcbiAgICB9XG4gICAgLnBlcnNvbmFsLWxpbmtzIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5oZWFkc2hvdC1ib3h7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLXNtKTtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgfVxuICAuaW1hZ2VfYm94MXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuXG5cbi53b3JraW1hZ2UxMntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbiN3d29ya2ltYWdlMTF7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5jb250ZW50LWJveHtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgLmltYWdlX2JveDF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgIFxuICAgLmNvbnRlbnQtYm94e1xuICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLXNtKTsgICBcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuLndvcmtfbGlua3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4XG4gICAgXG59XG5cbi53b3JrX2xpbms6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ibGFjayk7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjNzIGVhc2UtaW47XG59XG5cbi53b3JrX2xpbms6aG92ZXI6OmFmdGVyLCAud29ya19saW5rLnNlbGVjdGVkOjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudC1ib3gze1xuICAgIG1heC13aWR0aDogMjgwcHg7XG59XG4uaW1hZ2VfYm94M3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLndvcmtpbWFnZTMye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmltYWdlX2JveDN7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRlbnQtYm94M3tcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2Utc20pOyAgIFxuICAgICB3aWR0aDogMTAwJTtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBcblxuICAgICB9XG4gfVxuIC53b3JrNF9ib3h7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvaG9saWRheWlubjEucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgaGVpZ2h0OiA4MHZoO1xufVxuXG4udGl0bGVzX2NvbnRlbnQ0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC53b3JrNF9ib3h7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHg7XG4gICAgICAgIGhlaWdodDogNjB2aDtcbiAgICB9XG5cbiB9Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KYQy":
/*!******************************************!*\
  !*** ./src/app/about/typewriter-text.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Typetext = function () {
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.tick();
        }, delta);
    };
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
    document.body.appendChild(css);
};
module.exports = Typetext;


/***/ }),

/***/ "RkWp":
/*!************************************************!*\
  !*** ./src/app/tinspire/tinspire.component.ts ***!
  \************************************************/
/*! exports provided: TinspireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinspireComponent", function() { return TinspireComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-sticky-nav */ "Bq3M");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _project_thumbs_project_thumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-thumbs/project-thumbs.component */ "vLWJ");




class TinspireComponent {
    constructor() {
        this.selectedLink = '';
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(".picker .thumbstrip img").on("click", function () {
            let newsrc = jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr("src");
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).closest(".picker")
                .find(".main-image img").attr({ src: newsrc });
        });
    }
    onWindowScroll() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const el = document.scrollingElement || document.documentElement;
        // Useful for debugging. Helps the developer to figure out the right breakpoint for each of the parts of the top
        // navigation menu.
        console.log(el.scrollTop);
        const section1Offset = (_b = (_a = document.getElementById('section1')) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0;
        const section2Offset = (_d = (_c = document.getElementById('section2')) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0;
        const section3Offset = (_f = (_e = document.getElementById('section3')) === null || _e === void 0 ? void 0 : _e.offsetTop) !== null && _f !== void 0 ? _f : 0;
        const section4Offset = (_h = (_g = document.getElementById('section4')) === null || _g === void 0 ? void 0 : _g.offsetTop) !== null && _h !== void 0 ? _h : 0;
        const section5Offset = (_k = (_j = document.getElementById('section5')) === null || _j === void 0 ? void 0 : _j.offsetTop) !== null && _k !== void 0 ? _k : 0;
        const section6Offset = (_m = (_l = document.getElementById('section6')) === null || _l === void 0 ? void 0 : _l.offsetTop) !== null && _m !== void 0 ? _m : 0;
        if (el.scrollTop >= section5Offset - 100) {
            this.selectedLink = 'five';
        }
        else if (el.scrollTop >= section4Offset - 100) {
            this.selectedLink = 'four';
        }
        else if (el.scrollTop >= section3Offset - 100) {
            this.selectedLink = 'three';
        }
        else if (el.scrollTop >= section2Offset - 100) {
            this.selectedLink = 'two';
        }
        else if (el.scrollTop >= section1Offset - 100) {
            this.selectedLink = 'one';
        }
        else {
            this.selectedLink = '-';
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_active .circle").each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(this).css({ 'background-color': 'cadetblue' });
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_active .progress_title").each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(this).css({ 'color': 'cadetblue' });
            });
        });
        if (el.scrollTop > 1400) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".progress_title").css({ 'font-size': '.8em', 'color': '#9fa6a9', 'font-weight': '500' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".circle").css({ 'width': '25px', 'height': '25px', 'border': 'none', 'background-color': '#BBBBBB', 'color': 'white', 'font-weight': '200', 'font-size': '0.8em' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".stiky_nav_title").css({ 'color': 'rgba(60, 60, 60, 0)', 'font-size': '2em', 'font-weight': '500', 'letter-spacing': '0.5px', 'margin-bottom': '65px' });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".progress_title").css({ 'font-size': '.9em', 'color': '#515151', 'font-weight': '700' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".circle").css({ 'width': '45px', 'height': '45px', 'border': '2px solid #BBBBBB', 'background-color': 'transparent', 'color': '#BBBBBB', 'font-weight': '700', 'font-size': '1.3em' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".stiky_nav_title").css({ 'color': 'rgba(60, 60, 60, 1)', 'font-size': '2em', 'font-weight': '500', 'letter-spacing': '0.5px', 'margin-bottom': '65px' });
        }
        if (el.scrollTop > section6Offset) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_nav").css({ 'visibility': 'hidden' });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_nav").css({ 'visibility': 'visible' });
        }
    }
    markSelected(selectedLink) {
        this.selectedLink = selectedLink;
    }
}
TinspireComponent.ɵfac = function TinspireComponent_Factory(t) { return new (t || TinspireComponent)(); };
TinspireComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TinspireComponent, selectors: [["app-tinspire"]], hostBindings: function TinspireComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function TinspireComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 223, vars: 11, consts: [[1, "tin_top_image_container"], ["src", "../../assets/images/tinspire/toptinspire.png", "alt", "calculators", 1, "top_image"], [1, "flex-col-center-center", "neutral_light_bg"], [1, "container"], [1, "text-center", "slogan", "top-padding-lg", "bottom-padding-lg"], [1, "top-padding-lg", "bottom-padding-md"], [1, "flex-row-start-between"], [1, "overview"], [1, ""], [1, "body_text_sm"], [1, "myrole"], [1, "progress_bar_box", "mpadding"], [1, "h2title", "stiky_nav_title", "top-padding-md"], ["ngStickyNav", "", "stickyClass", "sticky-box-shadow", "ngStickyNav", "", 1, "sticky_nav", "navbar"], ["href", "/tinspire#section1", "target", "_self", 1, "sticky_nav_item", 3, "click"], [1, "sticky_content"], [1, "circle"], [1, "progress_title"], ["href", "/tinspire#section2", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["href", "/tinspire#section3", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["href", "/tinspire#section4", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["href", "/tinspire#section5", "target", "_self", 1, "sticky_nav_item", "sticky-five", 3, "click"], ["id", "section1", 1, "container"], [1, "bottom-padding-md", "top-padding-md"], [1, "bottom-padding-sm"], [1, "body_text_md", "bottom-padding-sm"], [1, "body_text_md", "bottom-padding-md"], [1, "ti_personas_box"], [1, "personas_container"], ["src", "../../assets/images/tinspire/ti_personas.png", "alt", "Ti personas", 1, "image-contain"], [1, "display-flex"], [1, "text_body_sm"], [1, "flex-stretch"], [1, "top-padding-md", "bottom-padding-sm"], [1, "flex-row-between-center"], [1, "illustration"], ["src", "../../assets/images/tinspire/handheald-illustration.png", "alt", "experience icon", 1, "image-contain"], [1, "experiences_list"], [1, "callout"], [1, "callout-text"], [1, "experience-icon"], ["src", "../../assets/images/tinspire/experience_icon_bad.png", "alt", "experience icon", 1, "image-contain"], [1, "notch"], [1, "body_text_md", "top-padding-md", "bottom-padding-lg"], [1, "text-center", "top-padding-lg"], [1, "bottom-padding-lg"], ["id", "section2", 1, "container"], [1, "bottom-padding-md", "top-padding-lg"], ["src", "../../assets/images/tinspire/ti-userflow.png", "alt", "ti user flow", 1, "image-contain", "bottom-margin-md"], [2, "font-weight", "800"], ["id", "section3", 1, "container"], [1, "bottom-padding-md"], [1, "flex-row-start-start"], [1, "picker", "simple"], [1, "main-image"], ["src", "../../assets/images/tinspire/ti-idea1.png", "alt", "idea image"], [1, "thumbstrip"], ["src", "../../assets/images/tinspire/ti-idea1.png", "alt", "idea 1"], ["src", "../../assets/images/tinspire/ti-idea2.png", "alt", "idea 2"], ["src", "../../assets/images/tinspire/ti-idea3.png", "alt", "idea 3"], [1, "idea_list"], [1, "text-bold", "idea-title"], [1, "top-padding-md"], [1, "flex-row-start-center"], [1, "data_icon"], ["src", "../../assets/images/tinspire/ti-data-icon.png", "alt", "icon", 1, "image-contain"], [1, "text-bold", "data-icon-text"], [1, "flex-row-center-center", "top-margin-md", "bottom-margin-lg"], [1, "flex-col-center-center"], [1, "text-bold"], [1, "ti-mockup"], ["src", "../../assets/images/tinspire/ti-mockup-a.png", "alt", "option A", 1, "image-contain"], ["src", "../../assets/images/tinspire/ti-mockup-b.png", "alt", "option B", 1, "image-contain"], [1, "neutral_light_bg"], ["id", "section4", 1, "container"], [1, "ti-discussion-image"], ["src", "../../assets/images/tinspire/ti-discussion.png", "alt", "discussion images", 1, "image-contain"], [1, "body_text_md", "bottom-padding-lg", "top-padding-sm"], ["id", "section5", 1, "container"], [1, "ti-spec-image"], ["src", "../../assets/images/tinspire/ti-specs1.png", "alt", "specs part 1", 1, "image-contain"], [1, "body_text_md", "bottom-padding-md", "top-padding-md"], ["src", "../../assets/images/tinspire/ti-specs2.png", "alt", "specs part 1", 1, "image-contain"], ["id", "section6", 1, "container"], [1, "flex-row-center-start", "bottom-padding-lg"], [1, "result"], ["src", "../../assets/images/tinspire/ti-result.png", "alt", "discussion images", 1, "image-contain"], [1, "result-gif"], ["src", "../../assets/images/tinspire/final-result.gif", "alt", "discussion images", 1, "image-contain"], [1, "top-padding-sm"], [3, "excludedItems"]], template: function TinspireComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Making math and science easier to learn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "P", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "TI-nspire CX II is Textas Instruments' most sophisticated graphing calculator mainly used for educational purposes. The objective of this project was to increase the user experience of this product by unifying the UI design inconsistencies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "My Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "P", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "For this project, I mostly worked on the creation of a product UI style guide that developers and project managers could use as a reference to build new features in the future. Evaluating the current UI heuristics and find a simple design solution to user pain points was also one of my commitments in this project. Here is a small section of what I did for this project. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Design process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nav", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TinspireComponent_Template_a_click_23_listener() { return ctx.markSelected("one"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TinspireComponent_Template_a_click_29_listener() { return ctx.markSelected("two"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TinspireComponent_Template_a_click_35_listener() { return ctx.markSelected("three"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Ideation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TinspireComponent_Template_a_click_41_listener() { return ctx.markSelected("four"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Discussion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TinspireComponent_Template_a_click_47_listener() { return ctx.markSelected("five"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Develop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Personas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "The design process for this project started with the creation of two \u201Cpersonas\u201D: Duncan and Carlos. Duncan represents the teachers with previous knowledge in math and science. He first receives training on how to use a graphing calculator, and post this he integrates activities with the calculator into his classroom. Carlos on the other hand represents the students who attend school to learn math and science for the first time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "The most interesting thing I learned about these personas is that students and teachers are DEPENDANT from each other. This graphing calculator is a complicated device that needs proper guidance on how to use it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Teachers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "User Pain Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Hearing stories from users, teammates, and project managers I identified the following user pain points: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "The blue circle I drew during the last class disappeared.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "b", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "I don\u2019t see the y-axis and x-axis on the screen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "b", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "I tap Shift + \u201Cmode\u201D but nothing happens.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "b", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Can\u2019t find the option \u201Cshapes\u201D in the menu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "b", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "All these pain points had one thing in common: the users were all trying to do a task in the wrong application. After the user research, the main design problem was described as the following statement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h2", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Design problem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "\u201CThe user is not able to identify the currently open app.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Looking for the answer to why and how the user was not able to identify the currently open app, I decided to check the user flow shown below. After looking at the user flow diagram, the reason why the user confuses the apps was clear. Different apps screens look 95% similar to each other.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "\u2014 User Flow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Why choose to fix this?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "This problem was mostly happening between Calculator, Graph, Geometry, and Notes applications which means that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "4 out of 7 apps in this calculator have this problem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "New users and non-expert users were more likely to experience these pain points. That drove me to the conclusion that there were big changes to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "reduce the user learning curve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " of the company\u2019s most sophisticated graphing calculator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "h1", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Ideation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "During the ideation process, I usually do brainstorming to explore different design solutions. Here are some ideas I had for this particular project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Idea 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Use the app icon in the header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Idea 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Use a dynamic navbar color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Idea 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Use a dynamic outline color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "After a discussion with the team, we eliminated idea number one and decided to use color to create an association between the app and the screen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Mockups");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "There were mainly two potential ideas that fit with the statement above. I created two high-fidelity mockups to show the team how they would look. Additionally, I made an accessibility test over option A (see image below) and a comparative table describing the pros & cons of each design.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Data & Statistics: #C14E9D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Option A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Option B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Discussion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "The top 2 ideas were discussed with the product management team.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Unfortunately, the color application on option A failed the accessibility test and finally, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "option B was chosen as the final design solution. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Develop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "The creation of new assets was not required for this project but I kept in contact with the developers\u2019 team during the execution of the project to answer any questions and specs updates. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Specs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Additional specs for split screens were given:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Final Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "h1", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Other projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "app-project-thumbs", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "one");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "two");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "three");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "four");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "five");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("excludedItems", 1);
    } }, directives: [ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_2__["StickyNavDirective"], _project_thumbs_project_thumbs_component__WEBPACK_IMPORTED_MODULE_3__["ProjectThumbsComponent"]], styles: [".tin_top_image_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.top_image {\n  object-fit: contain;\n  width: 100%;\n}\n\n.slogan {\n  width: 400px;\n}\n\n.overview, .myrole {\n  flex-grow: 1;\n  min-width: 50px;\n  width: 40%;\n  padding: 0 var(--space-sm);\n}\n\n.progress_bar_box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.sticky_nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  width: 60%;\n  float: left;\n  padding: 5px;\n  background: none;\n  margin-bottom: 20px;\n}\n\n.sticky_nav_item {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.stiky_nav_title {\n  margin-bottom: 65px;\n  margin: 130px, 0px;\n  transition: 0.2s;\n}\n\n.sticky_content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.circle {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 2px solid #BBBBBB;\n  background-color: none;\n  color: #BBBBBB;\n  font-weight: 700;\n  font-size: 1em;\n  transition: 0.5s;\n}\n\n.progress_title {\n  margin-top: 10px;\n  text-decoration: none;\n  font-size: 1.3em;\n  font-weight: 700;\n  color: #515151;\n  letter-spacing: 0.5px;\n  line-height: normal;\n  transition: 0.5s;\n  text-align: center;\n}\n\na.sticky_nav_item {\n  text-decoration: none;\n}\n\n.sticky-box-shadow {\n  width: 65%;\n  background: white !important;\n  border-radius: 5px;\n  z-index: 10;\n  padding: 0px;\n}\n\n@media screen and (max-width: 800px) {\n  .sticky-box-shadow {\n    width: 100%;\n    background: white !important;\n    border-radius: 0px;\n    z-index: 11;\n  }\n\n  .sticky_nav {\n    width: 100%;\n  }\n}\n\n.ti_personas_box {\n  width: 80%;\n  margin: auto;\n}\n\n.illustration {\n  width: 25%;\n}\n\n.experiences_list {\n  width: 70%;\n}\n\n.callout {\n  position: relative;\n  margin: 30px 0;\n  padding: 10px 20px;\n  background-color: #EDEDED;\n  /* easy rounded corners for modern browsers */\n  border-radius: 10px;\n}\n\n.callout .notch {\n  position: absolute;\n  top: 15px;\n  left: -10px;\n  margin: 0;\n  border-top: 10px solid transparent;\n  border-right: 10px solid #EDEDED;\n  border-left: 0;\n  border-bottom: 10px solid transparent;\n  padding: 0;\n  width: 0;\n  height: 0;\n  /* ie6 height fix */\n  font-size: 0;\n  line-height: 0;\n  /* ie6 transparent fix */\n  _border-right-color: pink;\n  _border-left-color: pink;\n  _filter: chroma(color=pink);\n}\n\n.mat-typography p.callout-text, .mat-typography p.idea-title, .mat-typography p.data-icon-text {\n  margin: 0 0 0;\n}\n\n.experience-icon {\n  width: 23px;\n  height: 23px;\n}\n\n/* IMAGE PICKER start*/\n\n.picker .main-image img {\n  width: 444px;\n}\n\n.thumstrip {\n  display: flex;\n}\n\n.picker .thumbstrip img {\n  width: 145px;\n}\n\n.picker .thumbstrip img:nth-child(2) {\n  padding: 0 5px;\n}\n\n.picker .thumbstrip img:last-child {\n  border-right: 0;\n}\n\n/* IMAGE PICKER end*/\n\n.idea_list {\n  margin-left: 30px;\n}\n\n.data_icon {\n  width: 50px;\n  height: 50px;\n  margin-right: 30px;\n}\n\n.ti-mockup {\n  width: 300px;\n  margin: 0 50px;\n}\n\n.ti-discussion-image {\n  width: 90%;\n  margin: auto;\n}\n\n.ti-spec-image {\n  width: 80%;\n  margin: auto;\n}\n\n.result {\n  width: 50%;\n}\n\n.result-gif {\n  max-width: 320px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RpbnNwaXJlLmNvbXBvbmVudC5zY3NzIiwidGluc3BpcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FBRko7O0FBTUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtBQUhKOztBQU1BO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsNEJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUFITjs7RUFLRTtJQUNJLFdBQUE7RUFGTjtBQUNGOztBQVFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFOSjs7QUFRQTtFQUNJLFVBQUE7QUFMSjs7QUFPQTtFQUNJLFVBQUE7QUFKSjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUdBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQVdBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFFQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Msd0JBQUE7R0NkSCx3QkRlRTtHQ2RGLHVCRGVFO0dDZEYsMEJEZUU7QUFkSjs7QUFpQkE7RUFDSSxhQUFBO0FBZEo7O0FBaUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFkSjs7QUFrQkEsc0JBQUE7O0FBQ0E7RUFDSSxZQUFBO0FBZko7O0FBaUJBO0VBQ0ksYUFBQTtBQWRKOztBQWdCQTtFQUNJLFlBQUE7QUFiSjs7QUFnQkE7RUFDSSxjQUFBO0FBYko7O0FBZUE7RUFDSSxlQUFBO0FBWko7O0FBY0Esb0JBQUE7O0FBRUE7RUFDSSxpQkFBQTtBQVpKOztBQWVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWNBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFYSjs7QUFhQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBVko7O0FBWUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQVRKOztBQVdBO0VBQ0ksVUFBQTtBQVJKOztBQVVBO0VBQ0ksZ0JBQUE7RUFDQSx1Q0FBQTtBQVBKIiwiZmlsZSI6InRpbnNwaXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGluX3RvcF9pbWFnZV9jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxufVxuXG4udG9wX2ltYWdle1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuXG4uc2xvZ2Fue1xuICAgIHdpZHRoOiA0MDBweDtcbn1cblxuLm92ZXJ2aWV3LCAubXlyb2xle1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtKTtcbn1cblxuLy8gc3RpY2t5IHByb2dyZXNzIGJhciBjc3MgU1RBUlQtLS0tLS0tLS0tLS1cbi5wcm9ncmVzc19iYXJfYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbn1cblxuLnN0aWNreV9uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgXG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDpub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zdGlja3lfbmF2X2l0ZW17XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xufVxuXG4uc3Rpa3lfbmF2X3RpdGxle1xuICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XG4gICAgbWFyZ2luOiAxMzBweCwgMHB4O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5zdGlja3lfY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNpcmNsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQkJCQkJCO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgY29sb3I6ICNCQkJCQkI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucHJvZ3Jlc3NfdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiM1MTUxNTE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEuc3RpY2t5X25hdl9pdGVte1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnN0aWNreS1ib3gtc2hhZG93IHtcbiAgd2lkdGg6IDY1JTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuc3RpY2t5LWJveC1zaGFkb3cge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgei1pbmRleDogMTE7XG4gICAgICB9XG4gICAgLnN0aWNreV9uYXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4vLyBzdGlja3kgcHJvZ3Jlc3MgYmFyIGNzcyBFTkQtLS0tLS0tLS0tLS0tLS1cblxuXG4udGlfcGVyc29uYXNfYm94e1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmlsbHVzdHJhdGlvbntcbiAgICB3aWR0aDogMjUlO1xufVxuLmV4cGVyaWVuY2VzX2xpc3R7XG4gICAgd2lkdGg6IDcwJTtcbn1cbi5jYWxsb3V0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gICAgLyogZWFzeSByb3VuZGVkIGNvcm5lcnMgZm9yIG1vZGVybiBicm93c2VycyAqL1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBcbn1cbi5jYWxsb3V0IC5ub3RjaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgLy8gYm9yZGVyLXRvcDogMDtcbiAgICAvLyBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAvLyBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZWVmNGY5O1xuXG4gICAgLy8gYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMDAwO1xuICAgIC8vIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAvLyBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAvLyBib3JkZXItYm90dG9tOiAwO1xuXG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI0VERURFRDtcbiAgICBib3JkZXItbGVmdDogMDtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgLyogaWU2IGhlaWdodCBmaXggKi9cbiAgICBmb250LXNpemU6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgIC8qIGllNiB0cmFuc3BhcmVudCBmaXggKi9cbiAgICBfYm9yZGVyLXJpZ2h0LWNvbG9yOiBwaW5rO1xuICAgIF9ib3JkZXItbGVmdC1jb2xvcjogcGluaztcbiAgICBfZmlsdGVyOiBjaHJvbWEoY29sb3I9cGluayk7XG59XG5cbi5tYXQtdHlwb2dyYXBoeSBwLmNhbGxvdXQtdGV4dCwgLm1hdC10eXBvZ3JhcGh5IHAuaWRlYS10aXRsZSwgLm1hdC10eXBvZ3JhcGh5IHAuZGF0YS1pY29uLXRleHR7XG4gICAgbWFyZ2luOiAwIDAgMDtcbn1cblxuLmV4cGVyaWVuY2UtaWNvbntcbiAgICB3aWR0aDogMjNweDtcbiAgICBoZWlnaHQ6IDIzcHg7XG59XG5cblxuLyogSU1BR0UgUElDS0VSIHN0YXJ0Ki9cbi5waWNrZXIgLm1haW4taW1hZ2UgaW1ne1xuICAgIHdpZHRoOiA0NDRweDtcbn1cbi50aHVtc3RyaXB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5waWNrZXIgLnRodW1ic3RyaXAgaW1ne1xuICAgIHdpZHRoOiAxNDVweDtcbiAgICBcbn1cbi5waWNrZXIgLnRodW1ic3RyaXAgaW1nOm50aC1jaGlsZCgyKXtcbiAgICBwYWRkaW5nOjAgIDVweDtcbn1cbi5waWNrZXIgLnRodW1ic3RyaXAgaW1nOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMDtcbn1cbi8qIElNQUdFIFBJQ0tFUiBlbmQqL1xuXG4uaWRlYV9saXN0e1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uZGF0YV9pY29ue1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4udGktbW9ja3Vwe1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IDAgNTBweDtcbn1cbi50aS1kaXNjdXNzaW9uLWltYWdle1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLnRpLXNwZWMtaW1hZ2V7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4ucmVzdWx0e1xuICAgIHdpZHRoOiA1MCU7XG59XG4ucmVzdWx0LWdpZntcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwIDAgMCAvIDEwJSk7XG59IiwiLnRpbl90b3BfaW1hZ2VfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b3BfaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsb2dhbiB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLm92ZXJ2aWV3LCAubXlyb2xlIHtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc20pO1xufVxuXG4ucHJvZ3Jlc3NfYmFyX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3RpY2t5X25hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDYwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnN0aWNreV9uYXZfaXRlbSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDE7XG59XG5cbi5zdGlreV9uYXZfdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA2NXB4O1xuICBtYXJnaW46IDEzMHB4LCAwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5zdGlja3lfY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI0JCQkJCQjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgY29sb3I6ICNCQkJCQkI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucHJvZ3Jlc3NfdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNTE1MTUxO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYS5zdGlja3lfbmF2X2l0ZW0ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zdGlja3ktYm94LXNoYWRvdyB7XG4gIHdpZHRoOiA2NSU7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnN0aWNreS1ib3gtc2hhZG93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB6LWluZGV4OiAxMTtcbiAgfVxuXG4gIC5zdGlja3lfbmF2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnRpX3BlcnNvbmFzX2JveCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmlsbHVzdHJhdGlvbiB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5leHBlcmllbmNlc19saXN0IHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmNhbGxvdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMzBweCAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gIC8qIGVhc3kgcm91bmRlZCBjb3JuZXJzIGZvciBtb2Rlcm4gYnJvd3NlcnMgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYWxsb3V0IC5ub3RjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAtMTBweDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI0VERURFRDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIC8qIGllNiBoZWlnaHQgZml4ICovXG4gIGZvbnQtc2l6ZTogMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIC8qIGllNiB0cmFuc3BhcmVudCBmaXggKi9cbiAgX2JvcmRlci1yaWdodC1jb2xvcjogcGluaztcbiAgX2JvcmRlci1sZWZ0LWNvbG9yOiBwaW5rO1xuICBfZmlsdGVyOiBjaHJvbWEoY29sb3I9cGluayk7XG59XG5cbi5tYXQtdHlwb2dyYXBoeSBwLmNhbGxvdXQtdGV4dCwgLm1hdC10eXBvZ3JhcGh5IHAuaWRlYS10aXRsZSwgLm1hdC10eXBvZ3JhcGh5IHAuZGF0YS1pY29uLXRleHQge1xuICBtYXJnaW46IDAgMCAwO1xufVxuXG4uZXhwZXJpZW5jZS1pY29uIHtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbn1cblxuLyogSU1BR0UgUElDS0VSIHN0YXJ0Ki9cbi5waWNrZXIgLm1haW4taW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDQ0NHB4O1xufVxuXG4udGh1bXN0cmlwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBpY2tlciAudGh1bWJzdHJpcCBpbWcge1xuICB3aWR0aDogMTQ1cHg7XG59XG5cbi5waWNrZXIgLnRodW1ic3RyaXAgaW1nOm50aC1jaGlsZCgyKSB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4ucGlja2VyIC50aHVtYnN0cmlwIGltZzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuXG4vKiBJTUFHRSBQSUNLRVIgZW5kKi9cbi5pZGVhX2xpc3Qge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmRhdGFfaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLnRpLW1vY2t1cCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIDUwcHg7XG59XG5cbi50aS1kaXNjdXNzaW9uLWltYWdlIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGktc3BlYy1pbWFnZSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJlc3VsdCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5yZXN1bHQtZ2lmIHtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'portfolioV4';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "W1Bn":
/*!*****************************************!*\
  !*** ./src/app/holidayinn/carousel2.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Carousel = function (el) {
    let carousel = this;
    carousel.element = $(el);
    carousel.currentSlide = 0;
    carousel.previouseSlide = 0;
    carousel.numberOfSlides = 0;
    carousel.timer = false;
    carousel.timerLength = 5000;
    carousel.timerPause = 10000;
    carousel.timing = false;
    carousel.changePosition = function (direction) {
        if (carousel.timing)
            return;
        carousel.previouseSlide = carousel.currentSlide;
        if (direction === false) {
            carousel.currentSlide--;
        }
        else if (direction === true) {
            carousel.currentSlide++;
        }
        else {
            if (carousel.currentSlide < direction) {
                carousel.currentSlide = direction;
                return carousel.showPosition(true, true);
            }
            else if (carousel.currentSlide > direction) {
                carousel.currentSlide = direction;
                return carousel.showPosition(false, true);
            }
        }
        if (carousel.currentSlide == carousel.previouseSlide)
            return;
        if (carousel.currentSlide < 0) {
            carousel.currentSlide = carousel.numberOfSlides - 1;
        }
        else if (carousel.currentSlide >= carousel.numberOfSlides) {
            carousel.currentSlide = 0;
        }
        carousel.showPosition(direction, false);
    };
    carousel.showPosition = function (direction, placed) {
        clearTimeout(carousel.changeTimer);
        carousel.changeTimer = false;
        let leftposition, rightposition;
        if (carousel.currentSlide == 0) {
            leftposition = carousel.currentSlide - 1;
        }
        else
            leftposition = carousel.currentSlide - 1;
        if (carousel.currentSlide == carousel.numberOfSlides - 1) {
            rightposition = 0;
        }
        else
            rightposition = carousel.currentSlide + 1;
        let cs = carousel.element.find(".carousel-slide")
            .removeClass("atLeft atRight atCenter moving");
        cs.eq(carousel.previouseSlide).addClass("atCenter");
        if (direction === true) {
            cs.eq(carousel.currentSlide).addClass("atRight");
            cs.eq(rightposition).addClass("atRight");
        }
        else if (direction === false) {
            cs.eq(carousel.currentSlide).addClass("atLeft");
            cs.eq(leftposition).addClass("atLeft");
        }
        carousel.timing = true;
        carousel.changeTimer = setTimeout(function () {
            carousel.element.find(".carousel-paginate")
                .eq(carousel.currentSlide).addClass("active")
                .siblings().removeClass("active");
            cs.eq(carousel.currentSlide)
                .removeClass("atLeft atRight").addClass("moving atCenter");
            cs.eq(carousel.previouseSlide)
                .removeClass("atLeft atRight atCenter").addClass("moving at" +
                (direction === true ? "Left" : "Right"));
            setTimeout(function () { carousel.timing = false; }, 1000);
        }, 50);
    };
    carousel.startTimer = function () {
        if (carousel.timerLength === 0)
            return;
        carousel.timer = setInterval(carousel.tick, carousel.timerLength);
    };
    carousel.stopTimer = function () {
        clearInterval(carousel.timer);
        carousel.timer = false;
    };
    carousel.pauseTimer = function () {
        carousel.stopTimer();
        carousel.timer = setTimeout(carousel.startTimer, carousel.timerPause);
    };
    carousel.tick = function () {
        carousel.changePosition(true);
    };
    carousel.makeButtons = function () {
        let buttondiv = $("<div class='carousel-pagination'>");
        for (let i = 0; i < carousel.numberOfSlides; i++) {
            let btn = $("<button class='carousel-paginate'>").html("&#x25cf;");
            if (i == 0)
                btn.addClass("active");
            buttondiv.append(btn);
        }
        carousel.element.append($("<div class='carousel-controls'>").append(buttondiv));
        carousel.element.append($("<div class='carousel-controlss'>").html("<div class='carousel-control  carousel-control-left'><svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><polyline points='71.85 12.58 48.15 60 71.85 107.42' style='fill:none;stroke:#3C3C3C;stroke-miterlimit:10;stroke-width:4px'/></svg></div>" +
            "<div class='carousel-control carousel-control-right'><svg id='Layer_2' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><polyline points='48.15 12.58 71.85 60 48.15 107.42' style='fill:none;stroke:#3C3C3C;stroke-miterlimit:10;stroke-width:4px'/></svg></div>"));
    };
    carousel.init = function () {
        if (carousel.element.data("timer") == "none") {
            carousel.timerLength = 0;
        }
        else if (carousel.element.data("timer") != undefined) {
            carousel.timerLength = +carousel.element.data("timer") * 1000;
        }
        carousel.timerPause = carousel.timerLength * 2;
        carousel.numberOfSlides = carousel.element.find(".carousel-slide").length;
        carousel.element.find(".carousel-slide").eq(0).addClass("atCenter");
        carousel.makeButtons();
        carousel.startTimer();
    };
    carousel.element.on("click", ".carousel-control", function () {
        carousel.changePosition($(this).is(".carousel-control-right"));
        carousel.pauseTimer();
    });
    carousel.element.on("click", ".carousel-paginate", function () {
        carousel.changePosition($(this).index());
        carousel.pauseTimer();
    });
    carousel.init();
};
module.exports = Carousel;


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-sticky-nav */ "Bq3M");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _tipython_tipython_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tipython/tipython.component */ "+Xrb");
/* harmony import */ var _wizapp_wizapp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wizapp/wizapp.component */ "pmWL");
/* harmony import */ var _holidayinn_holidayinn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./holidayinn/holidayinn.component */ "kNIO");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _tinspire_tinspire_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tinspire/tinspire.component */ "RkWp");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _project_thumbs_project_thumbs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project-thumbs/project-thumbs.component */ "vLWJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_4__["StickyNavModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _wizapp_wizapp_component__WEBPACK_IMPORTED_MODULE_11__["WizappComponent"],
        _holidayinn_holidayinn_component__WEBPACK_IMPORTED_MODULE_12__["HolidayinnComponent"],
        _tinspire_tinspire_component__WEBPACK_IMPORTED_MODULE_14__["TinspireComponent"],
        _tipython_tipython_component__WEBPACK_IMPORTED_MODULE_10__["TipythonComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
        _project_thumbs_project_thumbs_component__WEBPACK_IMPORTED_MODULE_16__["ProjectThumbsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_4__["StickyNavModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();


/***/ }),

/***/ "ap/H":
/*!********************************************!*\
  !*** ./src/app/holidayinn/before&after.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Beforeafter = function () {
    // If the comparison slider is present on the page lets initialise it, this is good you will include this in the main js to prevent the code from running when not needed
    if ($(".comparison-slider")[0]) {
        let compSlider = $(".comparison-slider");
        //let's loop through the sliders and initialise each of them
        compSlider.each(function () {
            let compSliderWidth = $(this).width() + "px";
            $(this).find(".resize img").css({ width: compSliderWidth });
            drags($(this).find(".divider"), $(this).find(".resize"), $(this));
        });
        //if the user resizes the windows lets update our variables and resize our images
        $(window).on("resize", function () {
            let compSliderWidth = compSlider.width() + "px";
            compSlider.find(".resize img").css({ width: compSliderWidth });
        });
    }
};
// This is where all the magic happens
// This is a modified version of the pen from Ege Görgülü - https://codepen.io/bamf/pen/jEpxOX - and you should check it out too.
function drags(dragElement, resizeElement, container) {
    // This creates a variable that detects if the user is using touch input insted of the mouse.
    let touched = false;
    window.addEventListener('touchstart', function () {
        touched = true;
    });
    window.addEventListener('touchend', function () {
        touched = false;
    });
    // clicp the image and move the slider on interaction with the mouse or the touch input
    dragElement.on("mousedown touchstart", function (e) {
        //add classes to the emelents - good for css animations if you need it to
        dragElement.addClass("draggable");
        resizeElement.addClass("resizable bluring");
        //create vars
        let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        let dragWidth = dragElement.outerWidth();
        let posX = dragElement.offset().left + dragWidth - startX;
        let containerOffset = container.offset().left;
        let containerWidth = container.outerWidth();
        let minLeft = containerOffset + 10;
        let maxLeft = containerOffset + containerWidth - dragWidth - 10;
        //add event listner on the divider emelent
        dragElement.parents().on("mousemove touchmove", function (e) {
            // if the user is not using touch input let do preventDefault to prevent the user from slecting the images as he moves the silder arround.
            if (touched === false) {
                e.preventDefault();
            }
            let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
            let leftValue = moveX + posX - dragWidth;
            // stop the divider from going over the limits of the container
            if (leftValue < minLeft) {
                leftValue = minLeft;
            }
            else if (leftValue > maxLeft) {
                leftValue = maxLeft;
            }
            let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";
            $(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function () {
                $(this).removeClass("draggable");
                resizeElement.removeClass("resizable");
            });
            $(".resizable").css("width", widthValue);
        }).on("mouseup touchend touchcancel", function () {
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable");
        });
    }).on("mouseup touchend touchcancel", function (e) {
        // stop clicping the image and move the slider
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");
    });
}
module.exports = Beforeafter;


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactComponent {
    constructor() {
        window.onscroll = () => { this.myFunction(); };
    }
    ngOnInit() {
    }
    myFunction() {
        console.log('CALLED');
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 17, vars: 0, consts: [[1, "container"], [1, "flex-row-between-center"], [1, ""], [1, "top-padding-lg", 2, "color", "var(--color-pure-black)"], [1, "personal-links", "display-flex", "flex-align-center"], ["href", "https://www.linkedin.com/in/mari-kurata", "target", "_blank", 1, "visitme_link"], [1, "separator"], ["href", "https://www.behance.net/marikimikurata", "target", "_blank", 1, "visitme_link"], [1, "contact-image"], ["src", "../../assets/images/about/wacom-pen.png", "alt", "wacome-pen", 1, "image-contain"], [1, "quote", "bottom-padding-sm"], [1, "text-right", "bottom-padding-lg", 2, "color", "var(--color-neutral-medium)"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Connect with me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Behance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "P", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u201CDesign is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it\u2019s really how it works.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u2013 STEVE JOBS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 800px) {\n  .personal-links[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.visitme_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: 0.5px;\n  color: #3C3C3C;\n  padding: 10px 60px 10px 0;\n}\n.visitme_link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 2px;\n  background: #000;\n  transition: width 0.3s ease-in;\n}\n.visitme_link[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.visitme_link[_ngcontent-%COMP%]:last-child {\n  padding-left: 60px;\n}\n.separator[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 20px;\n  letter-spacing: 0.5px;\n  background-color: #3C3C3C;\n}\n.contact-image[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.send-email-btn-box[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.quote[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 1.8em;\n  font-weight: 400;\n  color: var(--color-neutral-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLHVCQUFBO0VBQ047QUFDRjtBQUNBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0E7RUFDSSxVQUFBO0FBRUo7QUFBQTtFQUNJLFVBQUE7QUFHSjtBQURBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFJSiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAucGVyc29uYWwtbGlua3Mge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG4udmlzaXRtZV9saW5re1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgY29sb3I6IzNDM0MzQztcbiAgICBwYWRkaW5nOiAxMHB4IDYwcHggMTBweCAwO1xufVxuXG4udmlzaXRtZV9saW5rOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuM3MgZWFzZS1pbjtcbn1cblxuLnZpc2l0bWVfbGluazpob3Zlcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udmlzaXRtZV9saW5rOmxhc3QtY2hpbGR7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuXG4uc2VwYXJhdG9ye1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzQzNDO1xufVxuLmNvbnRhY3QtaW1hZ2V7XG4gICAgd2lkdGg6IDQwJTtcbn1cbi5zZW5kLWVtYWlsLWJ0bi1ib3h7XG4gICAgd2lkdGg6IDMwJTtcbn1cbi5xdW90ZXtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7IFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC1tZWRpdW0pO1xufSJdfQ== */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "footer-divider", "bottom-margin-md"], [1, "container", "flex-row-between-center", "bottom-padding-md"], [1, "social-media", "flex-row-between-center"], ["href", "https://www.linkedin.com/in/mari-kurata", "target", "_blank", 1, "social-icon"], ["src", "../../assets/images/icons/linkedin.svg", "alt", "linkedin", 1, "image-contain"], ["href", "https://www.behance.net/marikimikurata", "target", "_blank", 1, "social-icon"], ["src", "../../assets/images/icons/behane.svg", "alt", "behance", 1, "image-contain"], ["href", "mailto:marikimi.kuratahdz@gmail.com", 1, "social-icon"], ["src", "../../assets/images/icons/email.svg", "alt", "email", 1, "image-contain"], [1, "body_text_sm"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mari Kimi Kurata , \u00A92021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-divider[_ngcontent-%COMP%] {\n  height: 4px;\n  background-color: var(--color-black);\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  margin-right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1kaXZpZGVye1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbn1cbi5zb2NpYWwtaWNvbntcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59Il19 */"] });


/***/ }),

/***/ "kH7K":
/*!************************************!*\
  !*** ./src/app/wizapp/carousel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Carousel = function (el) {
    let carousel = this;
    carousel.element = $(el);
    carousel.currentSlide = 0;
    carousel.previouseSlide = 0;
    carousel.numberOfSlides = 0;
    carousel.timer = false;
    carousel.timerLength = 5000;
    carousel.timerPause = 10000;
    carousel.timing = false;
    carousel.changePosition = function (direction) {
        if (carousel.timing)
            return;
        carousel.previouseSlide = carousel.currentSlide;
        if (direction === false) {
            carousel.currentSlide--;
        }
        else if (direction === true) {
            carousel.currentSlide++;
        }
        else {
            if (carousel.currentSlide < direction) {
                carousel.currentSlide = direction;
                return carousel.showPosition(true, true);
            }
            else if (carousel.currentSlide > direction) {
                carousel.currentSlide = direction;
                return carousel.showPosition(false, true);
            }
        }
        if (carousel.currentSlide == carousel.previouseSlide)
            return;
        if (carousel.currentSlide < 0) {
            carousel.currentSlide = carousel.numberOfSlides - 1;
        }
        else if (carousel.currentSlide >= carousel.numberOfSlides) {
            carousel.currentSlide = 0;
        }
        carousel.showPosition(direction, false);
    };
    carousel.showPosition = function (direction, placed) {
        clearTimeout(carousel.changeTimer);
        carousel.changeTimer = false;
        let leftposition, rightposition;
        if (carousel.currentSlide == 0) {
            leftposition = carousel.currentSlide - 1;
        }
        else
            leftposition = carousel.currentSlide - 1;
        if (carousel.currentSlide == carousel.numberOfSlides - 1) {
            rightposition = 0;
        }
        else
            rightposition = carousel.currentSlide + 1;
        let cs = carousel.element.find(".carousel-slide")
            .removeClass("atLeft atRight atCenter moving");
        cs.eq(carousel.previouseSlide).addClass("atCenter");
        if (direction === true) {
            cs.eq(carousel.currentSlide).addClass("atRight");
            cs.eq(rightposition).addClass("atRight");
        }
        else if (direction === false) {
            cs.eq(carousel.currentSlide).addClass("atLeft");
            cs.eq(leftposition).addClass("atLeft");
        }
        carousel.timing = true;
        carousel.changeTimer = setTimeout(function () {
            carousel.element.find(".carousel-paginate")
                .eq(carousel.currentSlide).addClass("active")
                .siblings().removeClass("active");
            cs.eq(carousel.currentSlide)
                .removeClass("atLeft atRight").addClass("moving atCenter");
            cs.eq(carousel.previouseSlide)
                .removeClass("atLeft atRight atCenter").addClass("moving at" +
                (direction === true ? "Left" : "Right"));
            setTimeout(function () { carousel.timing = false; }, 1000);
        }, 50);
    };
    carousel.startTimer = function () {
        if (carousel.timerLength === 0)
            return;
        carousel.timer = setInterval(carousel.tick, carousel.timerLength);
    };
    carousel.stopTimer = function () {
        clearInterval(carousel.timer);
        carousel.timer = false;
    };
    carousel.pauseTimer = function () {
        carousel.stopTimer();
        carousel.timer = setTimeout(carousel.startTimer, carousel.timerPause);
    };
    carousel.tick = function () {
        carousel.changePosition(true);
    };
    carousel.makeButtons = function () {
        let buttondiv = $("<div class='carousel-pagination'>");
        for (let i = 0; i < carousel.numberOfSlides; i++) {
            let btn = $("<button class='carousel-paginate'>").html("&#x25cf;");
            if (i == 0)
                btn.addClass("active");
            buttondiv.append(btn);
        }
        carousel.element.append($("<div class='carousel-controls'>").append(buttondiv));
        carousel.element.append($("<div class='carousel-controlss'>").html("<div class='carousel-control  carousel-control-left'><svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><polyline points='71.85 12.58 48.15 60 71.85 107.42' style='fill:none;stroke:#3C3C3C;stroke-miterlimit:10;stroke-width:4px'/></svg></div>" +
            "<div class='carousel-control carousel-control-right'><svg id='Layer_2' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><polyline points='48.15 12.58 71.85 60 48.15 107.42' style='fill:none;stroke:#3C3C3C;stroke-miterlimit:10;stroke-width:4px'/></svg></div>"));
    };
    carousel.init = function () {
        if (carousel.element.data("timer") == "none") {
            carousel.timerLength = 0;
        }
        else if (carousel.element.data("timer") != undefined) {
            carousel.timerLength = +carousel.element.data("timer") * 1000;
        }
        carousel.timerPause = carousel.timerLength * 2;
        carousel.numberOfSlides = carousel.element.find(".carousel-slide").length;
        carousel.element.find(".carousel-slide").eq(0).addClass("atCenter");
        carousel.makeButtons();
        carousel.startTimer();
    };
    carousel.element.on("click", ".carousel-control", function () {
        carousel.changePosition($(this).is(".carousel-control-right"));
        carousel.pauseTimer();
    });
    carousel.element.on("click", ".carousel-paginate", function () {
        carousel.changePosition($(this).index());
        carousel.pauseTimer();
    });
    carousel.init();
};
module.exports = Carousel;


/***/ }),

/***/ "kNIO":
/*!****************************************************!*\
  !*** ./src/app/holidayinn/holidayinn.component.ts ***!
  \****************************************************/
/*! exports provided: HolidayinnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayinnComponent", function() { return HolidayinnComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel2.js */ "W1Bn");
/* harmony import */ var _carousel2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _before_after_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./before&after.js */ "ap/H");
/* harmony import */ var _before_after_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_before_after_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-sticky-nav */ "Bq3M");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _project_thumbs_project_thumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project-thumbs/project-thumbs.component */ "vLWJ");






class HolidayinnComponent {
    constructor() {
        this.selectedLink = '';
    }
    ngOnInit() {
        // shrink animation nav bar
        // carousel START
        jquery__WEBPACK_IMPORTED_MODULE_0__(".carousel").each(function (indexOfArray, element) {
            new _carousel2_js__WEBPACK_IMPORTED_MODULE_1__(element);
        });
        // carousel END
        // before after start
        _before_after_js__WEBPACK_IMPORTED_MODULE_2__();
        // before after end
    }
    onWindowScroll() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const el = document.scrollingElement || document.documentElement;
        // Useful for debugging. Helps the developer to figure out the right breakpoint for each of the parts of the top
        // navigation menu.
        console.log(el.scrollTop);
        const section1Offset = (_b = (_a = document.getElementById('section1')) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0;
        const section2Offset = (_d = (_c = document.getElementById('section2')) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0;
        const section3Offset = (_f = (_e = document.getElementById('section3')) === null || _e === void 0 ? void 0 : _e.offsetTop) !== null && _f !== void 0 ? _f : 0;
        const section4Offset = (_h = (_g = document.getElementById('section4')) === null || _g === void 0 ? void 0 : _g.offsetTop) !== null && _h !== void 0 ? _h : 0;
        const section5Offset = (_k = (_j = document.getElementById('section5')) === null || _j === void 0 ? void 0 : _j.offsetTop) !== null && _k !== void 0 ? _k : 0;
        if (el.scrollTop >= section4Offset - 100) {
            this.selectedLink = 'four';
        }
        else if (el.scrollTop >= section3Offset - 100) {
            this.selectedLink = 'three';
        }
        else if (el.scrollTop >= section2Offset - 100) {
            this.selectedLink = 'two';
        }
        else if (el.scrollTop >= section1Offset - 100) {
            this.selectedLink = 'one';
        }
        else {
            this.selectedLink = '-';
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_active .circle").each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(this).css({ 'background-color': 'var(--color-secondary)' });
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_active .progress_title").each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(this).css({ 'color': 'var(--color-secondary)' });
            });
        });
        if (el.scrollTop > 1300) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".progress_title").css({ 'font-size': '.8em', 'color': '#9fa6a9', 'font-weight': '500' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".circle").css({ 'width': '25px', 'height': '25px', 'border': 'none', 'background-color': '#BBBBBB', 'color': 'white', 'font-weight': '200', 'font-size': '0.8em' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".stiky_nav_title").css({ 'color': 'rgba(60, 60, 60, 0)', 'font-size': '2em', 'font-weight': '500', 'letter-spacing': '0.5px', 'margin-bottom': '65px' });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".progress_title").css({ 'font-size': '.9em', 'color': '#515151', 'font-weight': '700' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".circle").css({ 'width': '45px', 'height': '45px', 'border': '2px solid #BBBBBB', 'background-color': 'transparent', 'color': '#BBBBBB', 'font-weight': '700', 'font-size': '1.3em' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".stiky_nav_title").css({ 'color': 'rgba(60, 60, 60, 1)', 'font-size': '2em', 'font-weight': '500', 'letter-spacing': '0.5px', 'margin-bottom': '65px' });
        }
        if (el.scrollTop > section5Offset) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_nav").css({ 'visibility': 'hidden' });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_nav").css({ 'visibility': 'visible' });
        }
    }
    markSelected(selectedLink) {
        this.selectedLink = selectedLink;
    }
    ngAfterViewInit() {
    }
}
HolidayinnComponent.ɵfac = function HolidayinnComponent_Factory(t) { return new (t || HolidayinnComponent)(); };
HolidayinnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HolidayinnComponent, selectors: [["app-holidayinn"]], hostBindings: function HolidayinnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function HolidayinnComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 132, vars: 9, consts: [[1, "container"], [1, "text-center", "top-padding-lg"], [1, "text-center"], [1, "top-margin-lg", "bottom-margin-lg"], ["src", "../../assets/images/holidayinn/holidayinn-main.png", "alt", "enery management system", 1, "image-contain"], [1, "neutral_light_bg", "top-padding-lg", "bottom-padding-md"], [1, "flex-row-start-between"], [1, "overview"], [1, ""], [1, "body_text_sm"], [1, "myrole"], [1, "progress_bar_box", "mpadding"], [1, "h2title", "stiky_nav_title", "top-padding-lg"], ["ngStickyNav", "", "stickyClass", "sticky-box-shadow", 1, "sticky_nav", "navbar"], ["href", "/holidayinn#section1", "target", "_self", 1, "sticky_nav_item", 3, "click"], [1, "sticky_content"], [1, "circle"], [1, "progress_title"], ["href", "/holidayinn#section2", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["href", "/holidayinn#section3", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["href", "/holidayinn#section4", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["id", "section1", 1, "container"], [1, "bottom-padding-md", "top-padding-lg"], [1, "body_text_md", "bottom-padding-md"], [1, "car", "container"], ["data-timer", "3", 1, "carousel"], [1, "carousel-deck"], [1, "carousel-slide"], [1, "container", "flex-col-center-end"], ["target", "_blank", "href", "https://docs.google.com/presentation/d/121KxgTGWEuVGpqjfkBWNbsudzSY6Ta_Ruw56hQYtqpM/edit#slide=id.p", 1, "work_link"], [1, "flex-col-center-center"], [1, "problem-list"], [1, "body_text_md"], ["id", "section2", 1, "container"], [1, "body_text_md", "bottom-padding-sm"], [1, "top-margin-md"], ["src", "../../assets/images/holidayinn/walluserflow-flat.png", "alt", "enery management system", 1, "image-contain"], ["id", "section3", 1, "container"], ["src", "../../assets/images/holidayinn/holidayinn-inspiration.png", "alt", "enery management system", 1, "image-contain"], ["id", "section4", 1, "container"], ["id", "section5", 1, "top-padding-lg"], ["src", "../../assets/images/holidayinn/holidayinn-ui-elements.png", "alt", "enery management system", 1, "image-contain"], [1, "neutral_light_bg", "top-padding-lg", "bottom-padding-lg"], [1, "bottom-padding-md", "text-center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, ""], [1, "inner"], [1, "comparison-slider-wrapper"], [1, "comparison-slider"], [1, "overlay"], ["src", "../../assets/images/holidayinn/holidayinn-before.png", "alt", "after", 1, ""], [1, "resize"], ["src", "../../assets/images/holidayinn/holidayinn-after.png", "alt", "before", 1, ""], [1, "divider"], [1, "top-margin-xs", "text-center", "text-secondary", 2, "margin-left", "3px", "margin-block-end", "0em"], [1, "top-padding-lg"], [3, "excludedItems"]], template: function HolidayinnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reducing building energy consumption.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Building Energy Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "A Building Energy Management System is a computer-based control system installed in buildings that control and monitor the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "My Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Transform the default user interface into a friendlier system capable of communicating big amounts of data. Ideate and create assets and widgets for the development process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Design process");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nav", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HolidayinnComponent_Template_a_click_24_listener() { return ctx.markSelected("one"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Heuristic Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HolidayinnComponent_Template_a_click_30_listener() { return ctx.markSelected("two"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "User Flows");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HolidayinnComponent_Template_a_click_36_listener() { return ctx.markSelected("three"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Brainstroming");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HolidayinnComponent_Template_a_click_42_listener() { return ctx.markSelected("four"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Imlementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "The Heuristic Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Building energy management systems are complex software that collects a large amount of data coming from different types of sensors. There are specialized products in this particular industry that help engineers to put together the entire system; most of them include a UI kit that not necessarily is user-friendly. Considering the short time I got for this project; I decided to apply a heuristic evaluation on previous projects that used these UI templates and see what could I do to improve the User experience of these types of systems. From the heuristic evaluation, I got the following top 5 design priorities to consider for this project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "See Full heuristic evaluation \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "The problem");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "The UI is difficult to navigate through and the data displayed on the screen isn't necessarily organized.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Final users express that working with these systems is very challenging and time-consuming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "The images that the templates use to represent equipment and floorplans are visually too far away from reality.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "User Flows");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "The next thing to do for this project was to define the information architecture and the user flow of the project. This task is usually taken during a meeting with engineers, project managers, and designers. We all take a look at the building layouts and equipment diagrams to organize all the information. During this meeting, we discuss UI ideas and make design decisions too.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Inspiration and brainstorming");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "At the beginning of each project, I like to take some time to look for visual inspiration and explore possible UI designs. Look at the following images that I used as inspiration for this project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Once I defined the color palette and visual design style, I proceed with designing the UI elements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "h1", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "The final result");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "And I am the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "after");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, " image.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "I am the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "before");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, " image.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "h1", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, " \u2191");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Drag this line to the right and left to see the changes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Other projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "app-project-thumbs", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "one");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "two");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "three");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "four");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("excludedItems", 4);
    } }, directives: [ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_4__["StickyNavDirective"], _project_thumbs_project_thumbs_component__WEBPACK_IMPORTED_MODULE_5__["ProjectThumbsComponent"]], styles: [".projetc-thumbnail[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  border-radius: 10px;\n}\n\n.other-projects[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.other-projects[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.thumbnail-text[_ngcontent-%COMP%] {\n  max-width: 200px;\n  font-weight: 600;\n  line-height: 1.2;\n  padding-top: 10px;\n}\n\n.overview[_ngcontent-%COMP%], .myrole[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-width: 50px;\n  width: 40%;\n  padding: 0 var(--space-sm);\n}\n\n.progress_bar_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.sticky_nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  width: 60%;\n  float: left;\n  padding: 5px;\n  background: none;\n  margin-bottom: 20px;\n}\n\n.sticky_nav_item[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.stiky_nav_title[_ngcontent-%COMP%] {\n  margin-bottom: 65px;\n  margin: 130px, 0px;\n  transition: 0.2s;\n}\n\n.sticky_content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 2px solid #BBBBBB;\n  background-color: none;\n  color: #BBBBBB;\n  font-weight: 700;\n  font-size: 1em;\n  transition: 0.5s;\n}\n\n.progress_title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-decoration: none;\n  font-size: 1.3em;\n  font-weight: 700;\n  color: #515151;\n  letter-spacing: 0.5px;\n  line-height: normal;\n  transition: 0.5s;\n  text-align: center;\n}\n\na.sticky_nav_item[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.sticky-box-shadow[_ngcontent-%COMP%] {\n  width: 65%;\n  background: white !important;\n  border-radius: 5px;\n  z-index: 10;\n  padding: 0px;\n}\n\n@media screen and (max-width: 800px) {\n  .sticky-box-shadow[_ngcontent-%COMP%] {\n    width: 100%;\n    background: white !important;\n    border-radius: 0px;\n    z-index: 11;\n  }\n\n  .sticky_nav[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.carousel-slide[_ngcontent-%COMP%]:nth-of-type(1) {\n  background-image: url('heuristic1.png');\n}\n\n.carousel-slide[_ngcontent-%COMP%]:nth-of-type(2) {\n  background-image: url('heuristic2.png');\n}\n\n.carousel-slide[_ngcontent-%COMP%]:nth-of-type(3) {\n  background-image: url('heuristic3.png');\n}\n\n.carousel-slide[_ngcontent-%COMP%]:nth-of-type(4) {\n  background-image: url('heuristic4.png');\n}\n\n.carousel-slide[_ngcontent-%COMP%]:nth-of-type(5) {\n  background-image: url('heuristic5.png');\n}\n\n.carousel-slide[_ngcontent-%COMP%]:nth-of-type(6) {\n  background-image: url('heuristic6.png');\n}\n\n.carousel-slide[_ngcontent-%COMP%]:nth-of-type(7) {\n  background-image: url('heuristic7.png');\n}\n\n.carousel-slide[_ngcontent-%COMP%]:nth-of-type(8) {\n  background-image: url('heuristic8.png');\n}\n\n.carousel-slide[_ngcontent-%COMP%]:nth-of-type(9) {\n  background-image: url('heuristic9.png');\n}\n\n.carousel-slide[_ngcontent-%COMP%]:nth-of-type(10) {\n  background-image: url('heuristic10.png');\n}\n\n.problem-list[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.problem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin: 20px 0;\n  background-color: transparent;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  width: 250px;\n  bottom: 20px;\n  right: 20px;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 10px;\n  box-sizing: border-box;\n  color: #DDD;\n  text-align: right;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 50%;\n  overflow: hidden;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  right: auto;\n  left: 20px;\n  text-align: left;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]   .bluring[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  background-color: rgba(250, 250, 250, 0.4);\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  background-color: var(--color-secondary);\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  margin-left: -1px;\n  cursor: ew-resize;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  left: -9px;\n  top: 40%;\n  margin-top: -10px;\n  background-color: var(--color-secondary);\n  transform: rotate(45deg);\n  transition: all 0.1s ease-in-out;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  left: -5px;\n  top: 40%;\n  margin-top: -6px;\n  background-color: white;\n  transform: rotate(45deg);\n  transition: all 0.1s ease-in-out;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]   .divider.draggable[_ngcontent-%COMP%]:before {\n  width: 30px;\n  height: 30px;\n  left: -14px;\n  margin-top: -15px;\n}\n\n.comparison-slider-wrapper[_ngcontent-%COMP%]   .comparison-slider[_ngcontent-%COMP%]   .divider.draggable[_ngcontent-%COMP%]:after {\n  width: 20px;\n  height: 20px;\n  left: -9px;\n  margin-top: -10px;\n  background-color: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbGlkYXlpbm4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNJLHFCQUFBO0FBRko7O0FBSUE7RUFDSSwwQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FBREo7O0FBTUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtBQUhKOztBQU1BO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsNEJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUFITjs7RUFLRTtJQUNJLFdBQUE7RUFGTjtBQUNGOztBQVVBO0VBQ0MsdUNBQUE7QUFSRDs7QUFXQTtFQUNDLHVDQUFBO0FBUkQ7O0FBV0E7RUFDQyx1Q0FBQTtBQVJEOztBQVdBO0VBQ0MsdUNBQUE7QUFSRDs7QUFVQTtFQUNDLHVDQUFBO0FBUEQ7O0FBU0E7RUFDQyx1Q0FBQTtBQU5EOztBQVFBO0VBQ0MsdUNBQUE7QUFMRDs7QUFPQTtFQUNDLHVDQUFBO0FBSkQ7O0FBTUE7RUFDQyx1Q0FBQTtBQUhEOztBQUtBO0VBQ0Msd0NBQUE7QUFGRDs7QUFVQTtFQUNJLFVBQUE7QUFQSjs7QUFTQTtFQUNJLGtCQUFBO0FBTko7O0FBa0NBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBL0JKOztBQWlDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxzQkFBQTtBQWhDUjs7QUFpQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUEvQlo7O0FBa0NRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFoQ1o7O0FBcUNRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFuQ1o7O0FBb0NZO0VBQ0ksY0FBQTtBQWxDaEI7O0FBb0NZO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWxDaEI7O0FBc0NRO0VBQ0ksa0NBQUE7VUFBQSwwQkFBQTtFQUNBLDBDQUFBO0FBcENaOztBQXNDUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFwQ1o7O0FBcUNZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FBbkNoQjs7QUFxQ1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7QUFuQ2hCOztBQXNDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXBDcEI7O0FBc0NnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFwQ3BCIiwiZmlsZSI6ImhvbGlkYXlpbm4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBPVEhFUiBQUk9KRUNUUyBTVEFSVFxuXG4ucHJvamV0Yy10aHVtYm5haWx7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZGVzYWJsZS1saWdodCk7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKGNvbG9yLW5ldXRyYWwtbGlnaHQpO1xufVxuLm90aGVyLXByb2plY3Rze1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5vdGhlci1wcm9qZWN0czpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnRodW1ibmFpbC10ZXh0e1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLy8gT1RIRVIgUFJPSkVDVFMgRU5EXG4ub3ZlcnZpZXcsIC5teXJvbGV7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc20pO1xufVxuXG4vLyBzdGlja3kgcHJvZ3Jlc3MgYmFyIGNzcyBTVEFSVC0tLS0tLS0tLS0tLVxuXG4ucHJvZ3Jlc3NfYmFyX2JveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG59XG5cbi5zdGlja3lfbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IFxuICAgIHdpZHRoOiA2MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6bm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc3RpY2t5X25hdl9pdGVte1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbn1cblxuLnN0aWt5X25hdl90aXRsZXtcbiAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xuICAgIG1hcmdpbjogMTMwcHgsIDBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uc3RpY2t5X2NvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jaXJjbGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0JCQkJCQjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIGNvbG9yOiAjQkJCQkJCO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnByb2dyZXNzX3RpdGxle1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjojNTE1MTUxO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hLnN0aWNreV9uYXZfaXRlbXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zdGlja3ktYm94LXNoYWRvdyB7XG4gIHdpZHRoOiA2NSU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLnN0aWNreS1ib3gtc2hhZG93IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIHotaW5kZXg6IDExO1xuICAgICAgfVxuICAgIC5zdGlja3lfbmF2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuLy8gc3RpY2t5IHByb2dyZXNzIGJhciBjc3MgRU5ELS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQ0FST1VTRUxcblxuLmNhcm91c2VsLXNsaWRlOm50aC1vZi10eXBlKDEpe1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9oZXVyaXN0aWMvaGV1cmlzdGljMS5wbmcnKTtcbn1cblxuLmNhcm91c2VsLXNsaWRlOm50aC1vZi10eXBlKDIpe1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9oZXVyaXN0aWMvaGV1cmlzdGljMi5wbmcnKTtcbn1cblxuLmNhcm91c2VsLXNsaWRlOm50aC1vZi10eXBlKDMpe1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9oZXVyaXN0aWMvaGV1cmlzdGljMy5wbmcnKTtcbn1cblxuLmNhcm91c2VsLXNsaWRlOm50aC1vZi10eXBlKDQpe1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9oZXVyaXN0aWMvaGV1cmlzdGljNC5wbmcnKTtcbn1cbi5jYXJvdXNlbC1zbGlkZTpudGgtb2YtdHlwZSg1KXtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvaGV1cmlzdGljL2hldXJpc3RpYzUucG5nJyk7XG59XG4uY2Fyb3VzZWwtc2xpZGU6bnRoLW9mLXR5cGUoNil7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2hldXJpc3RpYy9oZXVyaXN0aWM2LnBuZycpO1xufVxuLmNhcm91c2VsLXNsaWRlOm50aC1vZi10eXBlKDcpe1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9oZXVyaXN0aWMvaGV1cmlzdGljNy5wbmcnKTtcbn1cbi5jYXJvdXNlbC1zbGlkZTpudGgtb2YtdHlwZSg4KXtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvaGV1cmlzdGljL2hldXJpc3RpYzgucG5nJyk7XG59XG4uY2Fyb3VzZWwtc2xpZGU6bnRoLW9mLXR5cGUoOSl7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2hldXJpc3RpYy9oZXVyaXN0aWM5LnBuZycpO1xufVxuLmNhcm91c2VsLXNsaWRlOm50aC1vZi10eXBlKDEwKXtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvaGV1cmlzdGljL2hldXJpc3RpYzEwLnBuZycpO1xufVxuXG4vLyBDQVJPVVNJRUwgRU5EIFxuXG5cblxuXG4ucHJvYmxlbS1saXN0e1xuICAgIHdpZHRoOiA3MCU7XG59XG4ucHJvYmxlbS1saXN0IGxpe1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuXG5cbi8vIEJFRk9SRSAmIEFGVEVSIFNUQVJUXG5cbiRtYXhXaWR0aDogOTAlO1xuJG1pblRhYmxldDogNzY3cHg7XG5cblxuXG4gICAgXG4gICAgXG4gICAgLy8gLmlubmVyIHtcbiAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgbWF4LXdpZHRoOiAkbWF4V2lkdGg7XG4gICAgLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8vICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIH1cblxuLmNvbXBhcmlzb24tc2xpZGVyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIC5jb21wYXJpc29uLXNsaWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLy8gYm9yZGVyOiA1cHggd2hpdGUgc29saWQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgID4gaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGNvbG9yOiAjREREO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9ICAgXG5cbiAgICAgICAgLnJlc2l6ZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICA+IGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmJsdXJpbmd7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLDI1MCwyNTAsIDAuNCk7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtOXB4O1xuICAgICAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC02cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5kcmFnZ2FibGV7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTRweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtOXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbi8vIEJFRk9SRSBBTkQgQUZURVIgRU5EXG5cblxuIl19 */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 0, consts: [[1, "navbar", "fixed-top"], [1, ""], ["routerLink", "/", 1, "branding"], [1, "container"], [1, "right-links"], ["routerLink", "/about-me", "routerLinkActive", "selected", 1, "nav-link"], ["routerLink", "/contact", "routerLinkActive", "selected", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mari kurata.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  background: none;\n  padding-right: 80px;\n  padding-left: 80px;\n  position: fixed;\n  z-index: 9;\n  top: 0;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n}\n\n.branding[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-family: \"Manrope\", sans-serif;\n  font-weight: 700;\n  font-size: 0.8em;\n  flex-grow: 1;\n  text-decoration: none;\n  color: #3C3C3C;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  background-color: rgba(250, 250, 250, 0.4);\n  padding: 0px 5px;\n}\n\n.right-links[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  background-color: rgba(250, 250, 250, 0.4);\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  color: #3C3C3C;\n  padding: 10px;\n  font-weight: 500;\n  font-size: 0.6em;\n  flex-grow: 1;\n}\n\n.nav-link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 2px;\n  background: #000;\n  transition: width 0.3s ease-in;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover::after, .nav-link.selected[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDSCxnQkFBQTtFQUNHLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsMENBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNILGdCQUFBO0VBQ0csZ0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4Ojk7XG4gICAgdG9wOjA7XG4gICAgXG59XG4ubmF2YmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJyYW5kaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZScsIHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiMzQzNDM0M7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsMjUwLDI1MCwgMC40KTtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xufVxuLnJpZ2h0LWxpbmtze1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLDI1MCwyNTAsIDAuNCk7XG59XG5cbi5uYXYtbGlua3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiMzQzNDM0M7XG4gICAgcGFkZGluZzogMTBweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IC42ZW07XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4ubmF2LWxpbms6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLWluO1xufVxuXG4ubmF2LWxpbms6aG92ZXI6OmFmdGVyLCAubmF2LWxpbmsuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "pmWL":
/*!********************************************!*\
  !*** ./src/app/wizapp/wizapp.component.ts ***!
  \********************************************/
/*! exports provided: WizappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizappComponent", function() { return WizappComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.js */ "kH7K");
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-sticky-nav */ "Bq3M");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _project_thumbs_project_thumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project-thumbs/project-thumbs.component */ "vLWJ");





class WizappComponent {
    constructor() {
        this.selectedLink = '';
    }
    ngOnInit() {
        // shrink animation nav bar
        // carousel 
        jquery__WEBPACK_IMPORTED_MODULE_0__(".carousel").each(function (indexOfArray, element) {
            new _carousel_js__WEBPACK_IMPORTED_MODULE_1__(element);
        });
    }
    onWindowScroll() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const el = document.scrollingElement || document.documentElement;
        // Useful for debugging. Helps the developer to figure out the right breakpoint for each of the parts of the top
        // navigation menu.
        console.log(el.scrollTop);
        const section1Offset = (_b = (_a = document.getElementById('section1')) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0;
        const section2Offset = (_d = (_c = document.getElementById('section2')) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0;
        const section3Offset = (_f = (_e = document.getElementById('section3')) === null || _e === void 0 ? void 0 : _e.offsetTop) !== null && _f !== void 0 ? _f : 0;
        const section4Offset = (_h = (_g = document.getElementById('section4')) === null || _g === void 0 ? void 0 : _g.offsetTop) !== null && _h !== void 0 ? _h : 0;
        const section5Offset = (_k = (_j = document.getElementById('section5')) === null || _j === void 0 ? void 0 : _j.offsetTop) !== null && _k !== void 0 ? _k : 0;
        const section6Offset = (_m = (_l = document.getElementById('section6')) === null || _l === void 0 ? void 0 : _l.offsetTop) !== null && _m !== void 0 ? _m : 0;
        if (el.scrollTop >= section5Offset - 100) {
            this.selectedLink = 'five';
        }
        else if (el.scrollTop >= section4Offset - 100) {
            this.selectedLink = 'four';
        }
        else if (el.scrollTop >= section3Offset - 100) {
            this.selectedLink = 'three';
        }
        else if (el.scrollTop >= section2Offset - 100) {
            this.selectedLink = 'two';
        }
        else if (el.scrollTop >= section1Offset - 100) {
            this.selectedLink = 'one';
        }
        else {
            this.selectedLink = '-';
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_active .circle").each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(this).css({ 'background-color': 'cadetblue' });
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_active .progress_title").each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(this).css({ 'color': 'cadetblue' });
            });
        });
        if (el.scrollTop > 1272) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".progress_title").css({ 'font-size': '.8em', 'color': '#9fa6a9', 'font-weight': '500' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".circle").css({ 'width': '25px', 'height': '25px', 'border': 'none', 'background-color': '#BBBBBB', 'color': 'white', 'font-weight': '200', 'font-size': '0.8em' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".stiky_nav_title").css({ 'color': 'rgba(60, 60, 60, 0)', 'font-size': '2em', 'font-weight': '500', 'letter-spacing': '0.5px', 'margin-bottom': '65px' });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".progress_title").css({ 'font-size': '.9em', 'color': '#515151', 'font-weight': '700' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".circle").css({ 'width': '45px', 'height': '45px', 'border': '2px solid #BBBBBB', 'background-color': 'transparent', 'color': '#BBBBBB', 'font-weight': '700', 'font-size': '1.3em' });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".stiky_nav_title").css({ 'color': 'rgba(60, 60, 60, 1)', 'font-size': '2em', 'font-weight': '500', 'letter-spacing': '0.5px', 'margin-bottom': '65px' });
        }
        if (el.scrollTop > section6Offset) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_nav").css({ 'visibility': 'hidden' });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".sticky_nav").css({ 'visibility': 'visible' });
        }
    }
    markSelected(selectedLink) {
        this.selectedLink = selectedLink;
    }
}
WizappComponent.ɵfac = function WizappComponent_Factory(t) { return new (t || WizappComponent)(); };
WizappComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WizappComponent, selectors: [["app-wizapp"]], hostBindings: function WizappComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function WizappComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 254, vars: 11, consts: [[1, "wiz_top_image_container", "container"], ["src", "../../assets/images/wizapp/topwizapp.png", "alt", "calculators", 1, "top_image", "image-contain"], ["src", "../../assets/images/wizapp/wizlogo.png", "alt", "logo", 1, "wizlogo", "image-contain"], [1, "container", "flex-row-around-center"], ["src", "../../assets/images/wizapp/wizbulb.png", "alt", "bulb", 1, "slogan_image", "top-margin-sm", "bottom-margin-md"], [1, "slogan_text_container"], [1, ""], [1, "body_text_md", "bottom-padding-md"], [1, "neutral_light_bg", "top-padding-lg", "bottom-padding-md"], [1, "container"], [1, "flex-row-start-between"], [1, "overview"], [1, "body_text_sm"], [1, "myrole"], [1, "progress_bar_box", "mpadding"], [1, "h2title", "stiky_nav_title", "top-padding-md"], ["ngStickyNav", "", "stickyClass", "sticky-box-shadow", "ngStickyNav", "", 1, "sticky_nav", "navbar"], ["href", "/wizapp#section1", "target", "_self", 1, "sticky_nav_item", 3, "click"], [1, "sticky_content"], [1, "circle"], [1, "progress_title"], ["href", "/wizapp#section2", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["href", "/wizapp#section3", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["href", "/wizapp#section4", "target", "_self", 1, "sticky_nav_item", 3, "click"], ["href", "/wizapp#section5", "target", "_self", 1, "sticky_nav_item", "sticky-five", 3, "click"], ["id", "section1", 1, "container"], [1, "bottom-padding-md", "top-padding-md"], [1, "car", "container"], ["data-timer", "3", 1, "carousel"], [1, "carousel-deck"], [1, "carousel-slide"], [1, "container", "flex-col-center-end"], ["target", "_blank", "href", "https://docs.google.com/presentation/d/1VLEnPfbQwva78-qnbG3eHrgdpQNC55QvS9yM9VUIuxk/edit?usp=sharing", 1, "work_link", "bottom-margin-md"], [1, "body_text_md", "bottom-padding-xs"], ["target", "_blank", "href", "https://docs.google.com/presentation/d/1j_NrdJXPsGNDE9TakvyoeNoijiWlJS3shStRgFTZJkg/edit?usp=sharing", 1, "work_link"], ["target", "_blank", "href", "https://docs.google.com/presentation/d/11--txf_GabvPcung2jscep307nhb7lsAVCBu5SBQcK4/edit?usp=sharing", 1, "work_link", "bottom-margin-sm"], [1, "bottom-padding-md"], [1, "problem_list", "body_text_md", "bottom-padding-lg"], [2, "font-weight", "800"], [1, "flex-row-center-center"], [1, "goals_imgside"], ["src", "../../assets/images/wizapp/goals_img.png", "alt", "current app", 1, "image-contain"], [1, "image_des", "text-center", "bottom-padding-md"], [1, "goals_container"], [1, "flex-row-nowrap-start-center"], ["src", "../../assets/images/list/list1.png", "alt", "list item", 1, "list_item_image"], [1, "text-bold"], ["src", "../../assets/images/list/listnull.png", "alt", "list item", 1, "list_item_image"], [1, "body_text", "list_text", "bottom-padding-sm"], ["src", "../../assets/images/list/list2.png", "alt", "list item", 1, "list_item_image"], ["src", "../../assets/images/list/list3.png", "alt", "list item", 1, "list_item_image"], [1, "body_text", "list_text", "bottom-padding-lg"], ["id", "section2", 1, "section2_box"], [1, "container", "display-flex", 2, "flex-direction", "column"], [1, "section2_content"], [1, "bottom-padding-md", "top-padding-lg"], [1, "body_text_md"], [1, "proto_list", "body_text_md"], [2, "font-weight", "300", "font-size", "2em"], [1, "flex-col-center-end", "bottom-margin-lg"], ["target", "_blank", "href", "https://docs.google.com/presentation/d/13klopLdFEOIOZbScmGpFV4BVwUs_cAKX2Oj59sZjIj4/edit?usp=sharing", 1, "work_link"], [1, "lowfidelity_image_box"], ["src", "../../assets/images/wizapp/lowmockups.png", "alt", "low fidelity mocups", 1, "image-contain"], [1, "neutral_light_bg"], ["src", "../../assets/images/wizapp/iteration1.png", "alt", "iterarion ui", 1, "image-contain", "bottom-margin-lg"], ["id", "section3", 1, "container"], [1, "flex-row-start-start"], ["src", "../../assets/images/wizapp/abimage.png", "alt", "ab test image", 1, "ab_image"], [1, "ab_text"], [1, "flex-col-center-end"], ["target", "_blank", "href", "https://docs.google.com/presentation/d/1hwagekXe3OOlsgj8NgJLaHmPFQe0eVwXMl3YH9QjjWk/edit?usp=sharing", 1, "work_link"], [1, "top-padding-lg", "bottom-padding-sm", "text-bold"], [1, "takeaway_box", "bottom-padding-md"], [1, "takeaways_list", "body_text_md"], [2, "font-weight", "800", "font-size", "2em"], ["src", "../../assets/images/wizapp/takeaway_chart.png", "alt", "ab test image", 1, "takeaway_image"], ["src", "../../assets/images/wizapp/iteration2.png", "alt", "itereation2 image", 1, "image-contain", "bottom-margin-lg"], ["id", "section4", 1, "neutral_light_bg"], [1, "top-padding-lg", "bottom-padding-sm"], [1, "text_body_md", "bottom-padding-md"], [1, "theme_test_container"], ["src", "../../assets/images/wizapp/themes.png", "alt", "themes image", 1, "theme_image"], ["src", "../../assets/images/wizapp/poll.png", "alt", "poll image", 1, "poll_image"], ["id", "section5", 1, "neutral_light_bg"], [1, "theme_test_container", "top-margin-md", "bottom-margin-md"], ["src", "../../assets/images/wizapp/sessions.jpg", "alt", "Zoom session", 1, "sessions_image"], ["src", "../../assets/images/wizapp/testers.png", "alt", "testers image", 1, "testers_image"], [1, "bottom-padding-md", "text-bold"], [1, "flex-row-between-center"], [1, "headshot_box", "flex-col-center-center"], ["src", "../../assets/images/wizapp/seijiheadshot.png", "alt", "ab test image", 1, "headshot_image"], [1, "body_text_sm", "text-center"], [1, "headshot_comments"], ["id", "section6", 1, "neutral_light_bg"], [1, "flex-col-center-center"], [1, "invision_title"], ["id", "invision", "width", "442", "height", "935", "src", "//invis.io/AF106B63UVJZ", "frameborder", "0", "allowfullscreen", ""], ["src", "../../assets/images/wizapp/wizscreenshots.png", "alt", "overall screenshots", 1, "overall"], [3, "excludedItems"]], template: function WizappComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Redesigning the WIZ app to increase smart light users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Smart lights for your daily living");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Wiz connect is a mobile application that allows users to connect, control, and automate their smart Wiz light bulbs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "My Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "I conducted user research interviews to understand user needs, identify main pain points, and find ways to improve the app. I Iterated the interface design through 2 rounds of user testing, one A/B testing, and surveys.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Design process");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "nav", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WizappComponent_Template_a_click_27_listener() { return ctx.markSelected("one"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WizappComponent_Template_a_click_33_listener() { return ctx.markSelected("two"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " User test 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WizappComponent_Template_a_click_39_listener() { return ctx.markSelected("three"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " A/B Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WizappComponent_Template_a_click_45_listener() { return ctx.markSelected("four"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Preference test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WizappComponent_Template_a_click_51_listener() { return ctx.markSelected("five"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "User test 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "User Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "By gathering data from actual users of smart light products and people interested in this technology; I was able to identify three personas that represent the gradient of smart lights consumers. These are the highlights for each persona.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "See Full user research \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "After making a heuristic evaluation on the existing app and reading extensive user review feedback notes, I conducted five user interviews to confirm some of the theories I had about users\u2019 pain points, needs, and expectations. The following list represents the top four design problems identified during the user research process.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "See full heuristic evaluation \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "link to interviews details \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "The Problem");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "ul", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "don\u2019t use secondary functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " because they have to dig deep in the app to be able to do tasks like change the color of the lights and set a timer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Turn on and off the lights manually is an easy task to do with the current app but users are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "willing to do more");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " than that. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Smart lights are difficult to get used to especially because the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "current features limit the user");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " to follow a tight daily life schedule. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Design Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Current app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Improve the color pallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Apply brighter colors and modern UI elements in the interface visuals to make the app feel more exciting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Improve distribution of the information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Organize the items in a new system to make simple functions like color picker faster to find. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Make the app adapt to the user");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Make the current automation features more flexible by introducing functions like a timer that fit better with users\u2019 daily life. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "h1", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "User Test 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Prototyping & testing the essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "The first round of user testing consisted of asking eight potential users to do the following three tasks: first to turn on a light, next to change the color of the light, and finally to set a 15 min timer on the light. All sessions were handed over zoom for 30min average. Here are the top 2 highlights from the user testing results:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "ul", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, " of the testers couldn\u2019t find the on/off button on the room screen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Light controls like color slider, brightness slider, and on/off button should go inside the thumb reachable area.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "Read more about user test details \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "UI/UX Iteration 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "h1", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "A/B Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Gathering feedback from users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "The next step for this project was to get feedback about how well the app communicates with users and how could this interface improve. A 5-10 min A/B testing was prepared using google forms for this assessment. I got around 15 responses full of notes and comments that I used to determine which design direction I should take. The following images represent a small section of the A/B testing results.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Look at the following A and B screenshots:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "Q1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, " Which one do you think communicates the color of the light better?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "AB testing details\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "h4", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "Key takeaways from the A/B testing:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "ul", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, " of the respondents think that version B communicates better the color of the light. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Most people prefer big and evident light color indicator over small and subtle detail, someone suggested making the light spectrum even ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "bigger. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "B design was positively taken as an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "ambient light.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](203, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "UI/UX Iteration 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](207, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "h2", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "Preference Test: Adding Color to the UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "Once most of the app had a great layout and structure, it was time to select a color pallet and bring excitement to the interface. I decided to do a quick preference test on Instagram showing two versions of the UI; one with a light theme and the other one with a dark theme. The following results helped me to learn and understand the current users' color preferences.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "User Test2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "It was very important to confirm that all design iterations made during this project were for good. Finally, I decided to repeat the user testing with three more individuals including one experienced WIZ app user. At this point in the designing process, most of the design problems were fixed. To finalize this project, I made final refinements in the design based on the feedback.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "Feedback from an actual WIZ app user");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "p", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "Wiz app user sience 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "\u201CI feel thankful for the new dark theme. The current app is too bright to be used in the dark; I usually use the app to turn on the lights in the darkness.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](237, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239, "\u201COverall the new app proposal is friendlier than the current one.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "\u201CI definitely download the new version of the app.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "h1", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, "Clickable Prototype");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](247, "iframe", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "Other projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](253, "app-project-thumbs", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "one");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "two");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "three");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("sticky_active", ctx.selectedLink === "five");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](202);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("excludedItems", 3);
    } }, directives: [ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_3__["StickyNavDirective"], _project_thumbs_project_thumbs_component__WEBPACK_IMPORTED_MODULE_4__["ProjectThumbsComponent"]], styles: [".wiz_top_image_container {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.wizlogo {\n  width: 90%;\n  height: 8vh;\n}\n\n.slogan_image {\n  flex-grow: 1;\n  max-width: 35%;\n  flex-shrink: 1;\n  min-width: 150px;\n}\n\n@media screen and (max-width: 800px) {\n  .slogan_image {\n    margin-top: var(--space-md);\n    max-width: 50%;\n  }\n\n  .top_image {\n    margin-top: var(--space-md);\n  }\n}\n\n.slogan_text_container {\n  flex-grow: 2;\n  max-width: 60%;\n  min-width: 150px;\n  flex-shrink: 1;\n}\n\n.overview, .myrole {\n  flex-grow: 1;\n  min-width: 50px;\n  width: 40%;\n  padding: 0 var(--space-sm);\n}\n\n.progress_bar_box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.sticky_nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  width: 60%;\n  float: left;\n  padding: 5px;\n  background: none;\n  margin-bottom: 20px;\n}\n\n.sticky_nav_item {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.stiky_nav_title {\n  margin-bottom: 65px;\n  margin: 130px, 0px;\n  transition: 0.2s;\n}\n\n.sticky_content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.circle {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 2px solid #BBBBBB;\n  background-color: none;\n  color: #BBBBBB;\n  font-weight: 700;\n  font-size: 1em;\n  transition: 0.5s;\n}\n\n.progress_title {\n  margin-top: 10px;\n  text-decoration: none;\n  font-size: 1.3em;\n  font-weight: 700;\n  color: #515151;\n  letter-spacing: 0.5px;\n  line-height: normal;\n  transition: 0.5s;\n  text-align: center;\n}\n\na.sticky_nav_item {\n  text-decoration: none;\n}\n\n.sticky-box-shadow {\n  width: 65%;\n  background: white !important;\n  border-radius: 5px;\n  z-index: 10;\n  padding: 0px;\n}\n\n@media screen and (max-width: 800px) {\n  .sticky-box-shadow {\n    width: 100%;\n    background: white !important;\n    border-radius: 0px;\n    z-index: 11;\n  }\n\n  .sticky_nav {\n    width: 100%;\n  }\n}\n\n.carousel-slide:nth-of-type(1) {\n  background-image: url('wiz_personas0.png');\n}\n\n.carousel-slide:nth-of-type(2) {\n  background-image: url('wiz_personas1.png');\n}\n\n.carousel-slide:nth-of-type(3) {\n  background-image: url('wiz_personas2.png');\n}\n\n.carousel-slide:nth-of-type(4) {\n  background-image: url('wiz_personas3.png');\n}\n\n.work_link {\n  text-decoration: none;\n  font-size: 1em;\n  width: 100%;\n  font-weight: 200;\n  color: #3C3C3C;\n  padding: 5px 0px;\n  text-align: end;\n}\n\n.work_link:hover {\n  text-decoration: underline;\n}\n\n.problem_list {\n  width: 77%;\n  text-align: start;\n  margin: auto;\n}\n\n.goals_imgside {\n  flex-grow: 1;\n  width: 20%;\n  min-width: 250px;\n  max-width: 250px;\n}\n\n.image_des {\n  margin: auto;\n}\n\n.goals_container {\n  margin-left: 8%;\n  flex-grow: 2;\n  width: 50%;\n}\n\n.list_item_image {\n  object-fit: contain;\n  width: 40px;\n  margin-right: 30px;\n}\n\n.section2_box {\n  background-color: var(--color-neutral-light);\n  position: relative;\n}\n\n.section2_content {\n  width: 60%;\n}\n\n.lowfidelity_image_box {\n  width: 30%;\n  height: 90%;\n  position: absolute;\n  right: 150px;\n  top: 30px;\n}\n\n@media screen and (max-width: 1050px) {\n  .section2_content {\n    width: 100%;\n  }\n\n  .lowfidelity_image_box {\n    width: 0%;\n  }\n}\n\n.ab_image {\n  width: 55%;\n  max-width: 700px;\n  min-width: 400px;\n  object-fit: cover;\n}\n\n.ab_text {\n  text-align: justify;\n  margin-left: 20px;\n  width: 30%;\n}\n\n@media screen and (max-width: 800px) {\n  .ab_image {\n    width: 100%;\n  }\n\n  .ab_text {\n    margin-top: var(--space-sm);\n    width: 100%;\n  }\n}\n\n.takeaway_box {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.takeaways_list {\n  width: 40%;\n  min-width: 400px;\n  flex-wrap: 1;\n  flex-shrink: 1;\n}\n\n.takeaway_image {\n  width: 40%;\n  flex-wrap: 1;\n  flex-shrink: 1;\n  object-fit: cover;\n}\n\n@media screen and (max-width: 800px) {\n  .takeaway_image {\n    width: 60%;\n  }\n\n  .takeaway_box {\n    justify-content: center;\n  }\n}\n\n.theme_test_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.theme_image {\n  width: 60%;\n  object-fit: cover;\n  margin-bottom: var(--space-md);\n}\n\n.poll_image {\n  width: 40%;\n  object-fit: cover;\n}\n\n@media screen and (max-width: 800px) {\n  .theme_image {\n    width: 80%;\n    margin-bottom: var(--space-sm);\n  }\n\n  .poll_image {\n    width: 80%;\n    margin-bottom: var(--space-sm);\n  }\n\n  .theme_test_container {\n    justify-content: center;\n  }\n}\n\n.sessions_image {\n  width: 54%;\n  flex-wrap: 1;\n  flex-shrink: 1;\n  object-fit: cover;\n}\n\n.testers_image {\n  width: 40%;\n  flex-wrap: 1;\n  flex-shrink: 1;\n  object-fit: cover;\n}\n\n.headshot_image {\n  max-width: 130px;\n  min-width: 130px;\n  object-fit: cover;\n}\n\n.headshot_box {\n  width: 15%;\n  margin-right: 2em;\n}\n\n.headshot_comments {\n  width: 75%;\n  min-width: 400px;\n}\n\n@media screen and (max-width: 800px) {\n  .headshot_box {\n    width: 20%;\n    margin: auto;\n  }\n\n  .headshot_comments {\n    margin: auto;\n    text-align: center;\n  }\n}\n\n.invision_title {\n  text-align: center;\n  position: relative;\n  top: 100px;\n}\n\n#invision {\n  transform: scale(0.7);\n  margin: 0px 0px;\n}\n\n.overall {\n  width: 100%;\n  object-fit: cover;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dpemFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJO0lBQ0ksMkJBQUE7SUFDQSxjQUFBO0VBRU47O0VBQUU7SUFDSSwyQkFBQTtFQUdOO0FBQ0Y7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFFSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFdBQUE7SUFDQSw0QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQUNOOztFQUNFO0lBQ0ksV0FBQTtFQUVOO0FBQ0Y7O0FBUUE7RUFDQywwQ0FBQTtBQU5EOztBQVNBO0VBQ0MsMENBQUE7QUFORDs7QUFTQTtFQUNDLDBDQUFBO0FBTkQ7O0FBU0E7RUFDQywwQ0FBQTtBQU5EOztBQWdLQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUE3Sko7O0FBZ0tBO0VBQ0ksMEJBQUE7QUE3Sko7O0FBZ0tBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQTdKSjs7QUFnS0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUE3Sko7O0FBZ0tBO0VBQ0ksWUFBQTtBQTdKSjs7QUFnS0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUE3Sko7O0FBZ0tBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUE3Sko7O0FBZ0tBO0VBQ0ksNENBQUE7RUFDQSxrQkFBQTtBQTdKSjs7QUFnS0E7RUFDSSxVQUFBO0FBN0pKOztBQWtLQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQS9KSjs7QUFrS0E7RUFDSTtJQUNJLFdBQUE7RUEvSk47O0VBa0tFO0lBQ0ksU0FBQTtFQS9KTjtBQUNGOztBQWtLQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFoS0o7O0FBbUtBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFoS0o7O0FBb0tBO0VBQ0k7SUFDSSxXQUFBO0VBaktOOztFQW1LRTtJQUNJLDJCQUFBO0lBQ0EsV0FBQTtFQWhLTjtBQUNGOztBQW1LQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBaktKOztBQW9LQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBaktKOztBQW9LQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBaktKOztBQW9LQTtFQUNJO0lBQ0ksVUFBQTtFQWpLTjs7RUFtS0U7SUFDSSx1QkFBQTtFQWhLTjtBQUNGOztBQW1LQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBaktKOztBQW9LQTtFQUNJLFVBQUE7RUFFQSxpQkFBQTtFQUNBLDhCQUFBO0FBbEtKOztBQXFLQTtFQUNJLFVBQUE7RUFFQSxpQkFBQTtBQW5LSjs7QUFzS0E7RUFDSTtJQUNJLFVBQUE7SUFDQSw4QkFBQTtFQW5LTjs7RUFxS0U7SUFDSSxVQUFBO0lBQ0EsOEJBQUE7RUFsS047O0VBb0tFO0lBQ0ksdUJBQUE7RUFqS047QUFDRjs7QUFvS0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWxLSjs7QUFxS0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWxLSjs7QUFxS0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFsS0o7O0FBcUtBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBbEtKOztBQXFLQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQWxLSjs7QUFxS0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxZQUFBO0VBbEtOOztFQW9LRTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtFQWpLTjtBQUNGOztBQW9LQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBbEtKOztBQXFLQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQWxLSjs7QUFxS0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBbEtKIiwiZmlsZSI6IndpemFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aXpfdG9wX2ltYWdlX2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxufVxuXG4ud2l6bG9nb3tcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOHZoO1xufVxuXG4uc2xvZ2FuX2ltYWdle1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXgtd2lkdGg6IDM1JTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuc2xvZ2FuX2ltYWdle1xuICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1tZCk7XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgIH1cbiAgICAudG9wX2ltYWdle1xuICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1tZCk7XG4gICAgfVxuXG59XG4uc2xvZ2FuX3RleHRfY29udGFpbmVye1xuICAgIGZsZXgtZ3JvdzogMjtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIGZsZXgtc2hyaW5rOiAxO1xufVxuXG4ub3ZlcnZpZXcsIC5teXJvbGV7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc20pO1xufVxuXG4gLy8gc3RpY2t5IHByb2dyZXNzIGJhciBjc3MgU1RBUlQtLS0tLS0tLS0tLS1cbi5wcm9ncmVzc19iYXJfYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbn1cblxuLnN0aWNreV9uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgXG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDpub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zdGlja3lfbmF2X2l0ZW17XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xufVxuXG4uc3Rpa3lfbmF2X3RpdGxle1xuICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XG4gICAgbWFyZ2luOiAxMzBweCwgMHB4O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5zdGlja3lfY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNpcmNsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQkJCQkJCO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgY29sb3I6ICNCQkJCQkI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucHJvZ3Jlc3NfdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiM1MTUxNTE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEuc3RpY2t5X25hdl9pdGVte1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnN0aWNreS1ib3gtc2hhZG93IHtcbiAgd2lkdGg6IDY1JTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuc3RpY2t5LWJveC1zaGFkb3cge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgei1pbmRleDogMTE7XG4gICAgICB9XG4gICAgLnN0aWNreV9uYXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4vLyBzdGlja3kgcHJvZ3Jlc3MgYmFyIGNzcyBFTkQtLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuLy8gQ0FST1VTRUxcblxuLmNhcm91c2VsLXNsaWRlOm50aC1vZi10eXBlKDEpe1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy93aXpfcGVyc29uYXMvd2l6X3BlcnNvbmFzMC5wbmcnKTtcbn1cblxuLmNhcm91c2VsLXNsaWRlOm50aC1vZi10eXBlKDIpe1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy93aXpfcGVyc29uYXMvd2l6X3BlcnNvbmFzMS5wbmcnKTtcbn1cblxuLmNhcm91c2VsLXNsaWRlOm50aC1vZi10eXBlKDMpe1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy93aXpfcGVyc29uYXMvd2l6X3BlcnNvbmFzMi5wbmcnKTtcbn1cblxuLmNhcm91c2VsLXNsaWRlOm50aC1vZi10eXBlKDQpe1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy93aXpfcGVyc29uYXMvd2l6X3BlcnNvbmFzMy5wbmcnKTtcbn1cblxuLy8gLmNhcm91c2VsLXNsaWRlIHtcbi8vIFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuLy8gXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4vLyBcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyB9XG5cbi8vIC5jYXJvdXNlbHtcbi8vIFx0bWFyZ2luOiBhdXRvO1xuLy8gXHRkaXNwbGF5OiBmbGV4O1xuLy8gXHR3aWR0aDogOTAlO1xuLy8gXHRtaW4taGVpZ2h0OiAyMDBweDtcbi8vIFx0bWF4LWhlaWdodDogNTkwcHg7XG4vLyBcdGhlaWdodDogNjB2aDtcbi8vIFx0cG9zaXRpb246IHJlbGF0aXZlO1xuLy8gXHRvdmVyZmxvdzogc2hvdztcbi8vICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuLy8gfVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuLy8gICAuY2Fyb3VzZWwge1xuLy8gICAgIGhlaWdodDogNXZoO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5jYXJvdXNlbC1kZWNre1xuLy8gXHR3aWR0aDogMTAwJTtcbi8vIFx0aGVpZ2h0OiA5MCU7XG4vLyBcdHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIFx0b3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cblxuLy8gLmNhcm91c2VsLXNsaWRlIHtcbi8vIFx0cG9zaXRpb246IGFic29sdXRlO1xuLy8gXHRsZWZ0OjEwMCU7XG4vLyBcdHRvcDowO1xuLy8gXHR3aWR0aDogMTAwJTtcbi8vIFx0aGVpZ2h0OiAxMDAlO1xuLy8gfVxuXG4vLyAuY2Fyb3VzZWwtc2xpZGUuYXRMZWZ0e1xuLy8gXHRsZWZ0OiAtMTAwJTtcbi8vIH1cblxuLy8gLmNhcm91c2VsLXNsaWRlLmF0UmlnaHR7XG4vLyBcdGxlZnQ6IDEwMCU7XG4vLyB9XG5cbi8vIC5jYXJvdXNlbC1zbGlkZS5hdENlbnRlcntcbi8vIFx0bGVmdDogMDtcbi8vIH1cblxuLy8gLm1vdmluZ3tcbi8vIFx0dHJhbnNpdGlvbjogbGVmdCAuOXM7XG4vLyB9XG5cbi8vIC5jYXJvdXNlbC1jb250cm9scyB7XG4vLyBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vIFx0Ym90dG9tOiAwO1xuLy8gXHRsZWZ0OiAwO1xuLy8gXHR3aWR0aDogMTAwJTtcbi8vIFx0dGV4dC1hbGlnbjogY2VudGVyO1xuLy8gXHR1c2VyLXNlbGVjdDogbm9uZTtcbi8vIH1cblxuLy8gLmNhcm91c2VsLWNvbnRyb2xzcyB7XG4vLyBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vIFx0Ym90dG9tOiA0NSU7XG4vLyBcdGxlZnQ6IDA7XG4vLyBcdHdpZHRoOiAxMDAlO1xuLy8gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyBcdHVzZXItc2VsZWN0OiBub25lO1xuLy8gfVxuXG4vLyAuY2Fyb3VzZWwtY29udHJvbCxcbi8vIC5jYXJvdXNlbC1wYWdpbmF0ZSB7XG4vLyBcdHdpZHRoOiAyZW07XG4vLyBcdGhlaWdodDogMmVtO1xuLy8gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyBcdGxpbmUtaGVpZ2h0OiAxLjhlbTtcbi8vIFx0Zm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc2Fucy1zZXJpZjtcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwKTtcbi8vIFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuLy8gXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyBcdGJvdHRvbTogMTBweDtcbi8vIFx0dHJhbnNpdGlvbjogYWxsIC44cztcbi8vIH1cblxuLy8gLmNhcm91c2VsLWNvbnRyb2wtbGVmdHtcbi8vIFx0bGVmdDogLTIuNWVtO1xuLy8gXHRmb250LXNpemU6IDEuOHJlbTtcbi8vIFx0cGFkZGluZzogMTBweDtcblxuLy8gfVxuXG4vLyAuY2Fyb3VzZWwtY29udHJvbC1yaWdodHtcbi8vIFx0cmlnaHQ6IC0yLjVlbTtcbi8vIFx0Zm9udC1zaXplOiAxLjhyZW07XG4vLyBcdHBhZGRpbmc6IDEwcHg7XG4vLyB9XG5cbi8vIC5jYXJvdXNlbC1wYWdpbmF0aW9uIHtcbi8vIFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyBcdGJvdHRvbTogMGVtO1xuLy8gXHR0cmFuc2l0aW9uOiBhbGwgLjVzO1xuLy8gfVxuXG4vLyAuY2Fyb3VzZWw6aG92ZXIgLmNhcm91c2VsLXBhZ2luYXRpb24ge1xuLy8gXHRib3R0b206IDFlbTtcbi8vIH1cblxuLy8gLmNhcm91c2VsLXBhZ2luYXRle1xuLy8gXHRwb3NpdGlvbjogc3RhdGljO1xuLy8gXHRmb250LXNpemU6IDFyZW07XG4vLyBcdGJvcmRlci13aWR0aDogMDtcbi8vIFx0Y3Vyc29yOiBwb2ludGVyO1xuLy8gXHRvdXRsaW5lOiAwO1xuLy8gXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyBcdGNvbG9yOiByZ2JhKDEzOCwgMTM4LCAxMzgsIDAuMjgpO1xuLy8gXHRtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xuLy8gfVxuXG4vLyAuY2Fyb3VzZWwtcGFnaW5hdGUuYWN0aXZle1xuLy8gXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xuLy8gXHRjb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAxKTtcbi8vIFx0Y3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4vLyAuY2Fyb3VzZWwtY29udHJvbDpob3Zlcixcbi8vIC5jYXJvdXNlbC1wYWdpbmF0ZTpob3ZlciB7XG4vLyBcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxODcsIDE4NywgMC4yKTtcbi8vIFx0Y29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgMSk7XG4vLyBcdGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLy8gLmNhcm91c2VsW2RhdGEtY29udHJvbHM9cGFnaW5hdGlvbl0gLmNhcm91c2VsLW1vdmUtcmlnaHQsXG4vLyAuY2Fyb3VzZWxbZGF0YS1jb250cm9scz1wYWdpbmF0aW9uXSAuY2Fyb3VzZWwtbW92ZS1sZmV0IHtcbi8vIFx0ZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gLmNhcm91c2VsW2RhdGEtY29udHJvbHM9ZGlyZWN0aW9uYWxdIC5jYXJvdXNlbC1wYWdpbmF0aW9ue1xuLy8gXHRkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyAuY2Fyb3VzZWxbZGF0YS1jb250cm9scz1ub25lXSAuY2Fyb3VzZWwtY29udHJvbHMge1xuLy8gXHRkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyAvLyBDQVJPVVNFTCBFTkRcblxuXG4ud29ya19saW5re1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGNvbG9yOiMzQzNDM0M7XG4gICAgcGFkZGluZzo1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLndvcmtfbGluazpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5wcm9ibGVtX2xpc3R7XG4gICAgd2lkdGg6IDc3JTtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5nb2Fsc19pbWdzaWRle1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB3aWR0aDogMjAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbn1cblxuLmltYWdlX2Rlc3tcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5nb2Fsc19jb250YWluZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIGZsZXgtZ3JvdzogMjtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4ubGlzdF9pdGVtX2ltYWdle1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uc2VjdGlvbjJfYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtbGlnaHQpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlY3Rpb24yX2NvbnRlbnR7XG4gICAgd2lkdGg6IDYwJTtcblxuICBcbn1cblxuLmxvd2ZpZGVsaXR5X2ltYWdlX2JveHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogKzE1MHB4O1xuICAgIHRvcDorMzBweDsgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICAuc2VjdGlvbjJfY29udGVudHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vZmxleC13cmFwOiAxO1xuICAgIH1cbiAgICAubG93ZmlkZWxpdHlfaW1hZ2VfYm94e1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgfVxufVxuXG4uYWJfaW1hZ2V7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5hYl90ZXh0e1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7ICAgIFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmFiX2ltYWdle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmFiX3RleHQge1xuICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnRha2Vhd2F5X2JveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFrZWF3YXlzX2xpc3R7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIGZsZXgtd3JhcDogMTtcbiAgICBmbGV4LXNocmluazogIDE7XG59XG5cbi50YWtlYXdheV9pbWFnZXtcbiAgICB3aWR0aDogNDAlO1xuICAgIGZsZXgtd3JhcDogMTtcbiAgICBmbGV4LXNocmluazogIDE7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLnRha2Vhd2F5X2ltYWdle1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgICAudGFrZWF3YXlfYm94e1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG5cbi50aGVtZV90ZXN0X2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udGhlbWVfaW1hZ2V7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XG59XG5cbi5wb2xsX2ltYWdle1xuICAgIHdpZHRoOiA0MCU7XG4gIFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC50aGVtZV9pbWFnZXtcbiAgICAgICAgd2lkdGg6IDgwJTsgICAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcbiAgICB9XG4gICAgLnBvbGxfaW1hZ2V7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcbiAgICB9XG4gICAgLnRoZW1lX3Rlc3RfY29udGFpbmVye1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG5cbi5zZXNzaW9uc19pbWFnZXtcbiAgICB3aWR0aDogNTQlO1xuICAgIGZsZXgtd3JhcDogMTtcbiAgICBmbGV4LXNocmluazogIDE7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50ZXN0ZXJzX2ltYWdle1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxleC13cmFwOiAxO1xuICAgIGZsZXgtc2hyaW5rOiAgMTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmhlYWRzaG90X2ltYWdle1xuICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmhlYWRzaG90X2JveHtcbiAgICB3aWR0aDogMTUlO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4uaGVhZHNob3RfY29tbWVudHN7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5oZWFkc2hvdF9ib3h7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmhlYWRzaG90X2NvbW1lbnRzeyAgXG4gICAgICAgIG1hcmdpbjogYXV0bzsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5pbnZpc2lvbl90aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTAwcHg7XG59XG5cbiNpbnZpc2lvbntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7ICAgIFxuICAgIG1hcmdpbjogMHB4IDBweDtcbn1cblxuLm92ZXJhbGx7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59Il19 */"], encapsulation: 2 });


/***/ }),

/***/ "vLWJ":
/*!************************************************************!*\
  !*** ./src/app/project-thumbs/project-thumbs.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectThumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectThumbsComponent", function() { return ProjectThumbsComponent; });
/* harmony import */ var _data_project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/project-list */ "8VDm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProjectThumbsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const projectitem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", projectitem_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "../../assets/images/thumbnails/", projectitem_r1.thumbnail, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](projectitem_r1.title);
} }
class ProjectThumbsComponent {
    constructor() {
        // title: string[] = ['Adding value to math and science learning experience.']; 
        // thumbnail: string[] = ['nspire-thumbnail'];
        this.projectitem = _data_project_list__WEBPACK_IMPORTED_MODULE_0__["ProjectItems"];
        this.excludedItems = -1;
    }
    ngOnInit() {
        if (this.excludedItems > -1) {
            this.projectitem = this.projectitem.filter(item => item["id"] != this.excludedItems);
        }
    }
}
ProjectThumbsComponent.ɵfac = function ProjectThumbsComponent_Factory(t) { return new (t || ProjectThumbsComponent)(); };
ProjectThumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectThumbsComponent, selectors: [["app-project-thumbs"]], inputs: { excludedItems: "excludedItems" }, decls: 3, vars: 5, consts: [[1, "flex-row-start-start-nowrap", "top-padding-md", "bottom-margin-lg", "overscroll-x"], [4, "ngFor", "ngForOf"], [1, "other-projects", "flex-col-start-start", 3, "href"], [1, "projetc-thumbnail"], ["alt", "nspire", 1, "image-contain", "thumbnail", 3, "src"], [1, "thumbnail-text"]], template: function ProjectThumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectThumbsComponent_div_1_Template, 6, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx.projectitem, 0, 4));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".projetc-thumbnail[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  overflow: hidden;\n  width: 200px;\n  height: 200px;\n  transform: scale(1);\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  transition: all 0.2s linear;\n  transform: scale(1);\n}\n\n.thumbnail[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.other-projects[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin-right: 50px;\n}\n\n.other-projects[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.thumbnail-text[_ngcontent-%COMP%] {\n  max-width: 200px;\n  font-weight: 600;\n  line-height: 1.2;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3QtdGh1bWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFJQSxtQkFBQTtBQUhKOztBQU9BO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU1BO0VBQ0kscUJBQUE7QUFISjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJQTtFQUNJLDBCQUFBO0FBREo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZKIiwiZmlsZSI6InByb2plY3QtdGh1bWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJvamV0Yy10aHVtYm5haWx7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogIGNvbnRhaW47XG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWRlc2FibGUtbGlnaHQpO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcihjb2xvci1uZXV0cmFsLWxpZ2h0KTtcbn1cbi50aHVtYm5haWx7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4udGh1bWJuYWlsOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5vdGhlci1wcm9qZWN0c3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLm90aGVyLXByb2plY3RzOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIFxufVxuXG4udGh1bWJuYWlsLXRleHR7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _tinspire_tinspire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tinspire/tinspire.component */ "RkWp");
/* harmony import */ var _tipython_tipython_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tipython/tipython.component */ "+Xrb");
/* harmony import */ var _wizapp_wizapp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wizapp/wizapp.component */ "pmWL");
/* harmony import */ var _holidayinn_holidayinn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./holidayinn/holidayinn.component */ "kNIO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routerOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
};
const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'about-me', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'tinspire', component: _tinspire_tinspire_component__WEBPACK_IMPORTED_MODULE_4__["TinspireComponent"] },
    { path: 'tipython', component: _tipython_tipython_component__WEBPACK_IMPORTED_MODULE_5__["TipythonComponent"] },
    { path: 'wizapp', component: _wizapp_wizapp_component__WEBPACK_IMPORTED_MODULE_6__["WizappComponent"] },
    { path: 'holidayinn', component: _holidayinn_holidayinn_component__WEBPACK_IMPORTED_MODULE_7__["HolidayinnComponent"] },
    {
        path: 'content',
        component: _wizapp_wizapp_component__WEBPACK_IMPORTED_MODULE_6__["WizappComponent"],
    },
    {
        path: '',
        redirectTo: 'content',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, routerOptions)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map