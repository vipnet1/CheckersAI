(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MobileDevProg\CheckersAI\Angular-Cordova\angular-cordova\src\main.ts */"zUnb");


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

/***/ "LcVa":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_verification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/verification.service */ "pKGZ");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/game.service */ "nVNn");
/* harmony import */ var _services_ai_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ai.service */ "f6iA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BoardComponent_div_0_span_1_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_div_0_span_1_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_div_0_span_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_0_span_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const column_index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const row_index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.checkerClick(row_index_r2, column_index_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_div_0_span_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_0_span_1_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const column_index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const row_index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.checkerClick(row_index_r2, column_index_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_div_0_span_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_0_span_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const column_index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const row_index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.play(row_index_r2, column_index_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_div_0_span_1_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_div_0_span_1_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_div_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_div_0_span_1_button_1_Template, 2, 0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BoardComponent_div_0_span_1_button_2_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BoardComponent_div_0_span_1_button_3_Template, 2, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BoardComponent_div_0_span_1_button_4_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BoardComponent_div_0_span_1_button_5_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardComponent_div_0_span_1_button_6_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BoardComponent_div_0_span_1_button_7_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r4 === "White");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r4 === "Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r4 === "Black_White");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r4 === "Black_Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r4 === "Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r4 === "Black_Selected_White");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r4 === "Black_Selected_Black");
} }
function BoardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_div_0_span_1_Template, 8, 7, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class BoardComponent {
    constructor(verificationService, gameService, aiService) {
        this.verificationService = verificationService;
        this.gameService = gameService;
        this.aiService = aiService;
        this.cells = [];
        this.is_human_rabbit = false;
        this.now_humans_turn = true;
    }
    play(row_index, column_index) {
        this.verificationService.cleanup_cells(this.cells);
        const rabbit_cell = this.gameService
            .make_a_move(this.cells, [this.checker_to_move[0], this.checker_to_move[1]], [row_index, column_index]);
        const rabbitMoves = this.verificationService.get_rabbit_moves(this.cells, rabbit_cell[0], rabbit_cell[1]);
        const game_state = this.gameService.check_game_state(this.cells, rabbitMoves);
        if (game_state !== 0) {
            window.location.reload();
            return;
        }
        if (this.now_humans_turn) {
            this.now_humans_turn = false;
            this.activateAI();
        }
        else {
            this.now_humans_turn = true;
        }
    }
    checkerClick(row_index, column_index) {
        if (!this.now_humans_turn) {
            return;
        }
        this.verificationService.cleanup_cells(this.cells);
        const is_rabbit = this.is_rabbit_clicked(row_index, column_index);
        if (is_rabbit !== this.is_human_rabbit) {
            return;
        }
        this.verificationService.show_human_move_options(this.cells, row_index, column_index, is_rabbit);
        this.checker_to_move = [row_index, column_index];
    }
    activateAI() {
        const best_decision = this.aiService
            .calculate_best_decision(this.cells, this.gameService.get_rabbit_cell(), this.gameService.get_wolf_cells());
        this.checker_to_move = best_decision[0];
        this.play(best_decision[1][0], best_decision[1][1]);
    }
    ngOnInit() {
        this.gameService.game_init(this.cells);
        this.aiService.set_ai_side(!this.is_human_rabbit);
    }
    is_rabbit_clicked(row_index, column_index) { return this.cells[row_index][column_index] === "Black_White"; }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_verification_service__WEBPACK_IMPORTED_MODULE_1__["VerificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ai_service__WEBPACK_IMPORTED_MODULE_3__["AiService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["class", "cell_white", 4, "ngIf"], ["class", "cell_black", 4, "ngIf"], ["class", "cell_black_white", 3, "click", 4, "ngIf"], ["class", "cell_black_black", 3, "click", 4, "ngIf"], ["class", "cell_option", 3, "click", 4, "ngIf"], ["class", "cell_black_selected_white", 4, "ngIf"], ["class", "cell_black_selected_black", 4, "ngIf"], [1, "cell_white"], [1, "cell_black"], [1, "cell_black_white", 3, "click"], [1, "cell_black_black", 3, "click"], [1, "cell_option", 3, "click"], [1, "cell_black_selected_white"], [1, "cell_black_selected_black"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BoardComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cells);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'Verdana';\r\n    font-size: 24px;\r\n}\r\n\r\n.cell_white[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    height: 75px;\r\n    background-color: white;\r\n}\r\n\r\n.cell_black[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    height: 75px;\r\n    background-color: blue;\r\n}\r\n\r\n.cell_black_black[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    height: 75px;\r\n    background-color: blue;\r\n    color: tomato;\r\n}\r\n\r\n.cell_black_selected_black[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    height: 75px;\r\n    background-color: purple;\r\n    color: tomato;\r\n}\r\n\r\n.cell_black_white[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    height: 75px;\r\n    background-color: blue;\r\n    color: whitesmoke;\r\n}\r\n\r\n.cell_black_selected_white[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    height: 75px;\r\n    background-color: purple;\r\n    color: whitesmoke;\r\n}\r\n\r\n.cell_option[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    height: 75px;\r\n    background-color: greenyellow;\r\n    color: darkblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CIiwiZmlsZSI6ImJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogJ1ZlcmRhbmEnO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uY2VsbF93aGl0ZSB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2VsbF9ibGFjayB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5jZWxsX2JsYWNrX2JsYWNrIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGNvbG9yOiB0b21hdG87XHJcbn1cclxuXHJcbi5jZWxsX2JsYWNrX3NlbGVjdGVkX2JsYWNrIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gICAgY29sb3I6IHRvbWF0bztcclxufVxyXG5cclxuLmNlbGxfYmxhY2tfd2hpdGUge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5jZWxsX2JsYWNrX3NlbGVjdGVkX3doaXRlIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5jZWxsX29wdGlvbiB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG4gICAgY29sb3I6IGRhcmtibHVlO1xyXG59Il19 */"] });


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
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/board.component */ "LcVa");


class AppComponent {
    constructor() {
        this.title = 'angular-cordova';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-board");
    } }, directives: [_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/board.component */ "LcVa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "f6iA":
/*!**********************************************!*\
  !*** ./src/app/board/services/ai.service.ts ***!
  \**********************************************/
/*! exports provided: AiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiService", function() { return AiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _verification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.service */ "pKGZ");


class AiService {
    constructor(verificationService) {
        this.verificationService = verificationService;
    }
    set_ai_side(is_ai_rabbit) { this.is_ai_rabbit = is_ai_rabbit; }
    calculate_best_decision(cells, rabbit_cell, wolf_cells) {
        if (this.is_ai_rabbit) {
            const move_options = this.verificationService.get_rabbit_moves(cells, rabbit_cell[0], rabbit_cell[1]);
            for (const option of move_options) {
                if (option !== undefined) {
                    return [rabbit_cell, option];
                }
            }
        }
        else {
            for (const wolf_cell of wolf_cells) {
                const move_options = this.verificationService.get_wolf_moves(cells, wolf_cell[0], wolf_cell[1]);
                for (const option of move_options) {
                    if (option !== undefined) {
                        return [wolf_cell, option];
                    }
                }
            }
        }
        return undefined;
    }
}
AiService.ɵfac = function AiService_Factory(t) { return new (t || AiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_verification_service__WEBPACK_IMPORTED_MODULE_1__["VerificationService"])); };
AiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AiService, factory: AiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nVNn":
/*!************************************************!*\
  !*** ./src/app/board/services/game.service.ts ***!
  \************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GameService {
    constructor() { }
    get_rabbit_cell() { return this.rabbit_cell; }
    get_wolf_cells() { return this.wolf_cells; }
    make_a_move(cells, cell_from, cell_to) {
        const txt_cell_from = cells[cell_from[0]][cell_from[1]];
        cells[cell_from[0]][cell_from[1]] = "Black";
        cells[cell_to[0]][cell_to[1]] = txt_cell_from;
        if (cells[cell_to[0]][cell_to[1]] === "Black_White") {
            this.rabbit_cell = [cell_to[0], cell_to[1]];
        }
        else {
            for (const wolf_cell of this.wolf_cells) {
                if (wolf_cell[0] === cell_from[0] && (wolf_cell[1] === cell_from[1])) {
                    wolf_cell[0] = cell_to[0];
                    wolf_cell[1] = cell_to[1];
                    break;
                }
            }
        }
        return this.rabbit_cell;
    }
    check_game_state(cells, rabbitMoves) {
        if (this.rabbit_cell[0] === 0) {
            return 1;
        }
        for (let idx = 0; idx < 4; idx++) {
            if (rabbitMoves[idx] !== undefined) {
                return 0;
            }
        }
        return -1;
    }
    game_init(cells) {
        this.cells_init(cells);
        this.checkers_init(cells);
    }
    cells_init(cells) {
        let nextWhite = true;
        for (let row = 0; row < 8; row++) {
            cells[row] = [];
            let currWhite = nextWhite;
            nextWhite = !nextWhite;
            for (let column = 0; column < 8; column++) {
                cells[row][column] = currWhite ? "White" : "Black";
                currWhite = !currWhite;
            }
        }
    }
    checkers_init(cells) {
        for (let column = 1; column < 8; column += 2) {
            cells[0][column] = "Black_Black";
        }
        cells[7][4] = "Black_White";
        this.rabbit_cell = [7, 4];
        this.wolf_cells = [[0, 1], [0, 3], [0, 5], [0, 7]];
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pKGZ":
/*!********************************************************!*\
  !*** ./src/app/board/services/verification.service.ts ***!
  \********************************************************/
/*! exports provided: VerificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationService", function() { return VerificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VerificationService {
    constructor() {
        this.cells_cleanup_cache = [];
    }
    cleanup_cells(cells) {
        for (const cleanup_cell of this.cells_cleanup_cache) {
            cells[cleanup_cell[0]][cleanup_cell[1]] = cleanup_cell[2];
        }
        this.cells_cleanup_cache = [];
    }
    show_human_move_options(cells, row_index, column_index, isRabbitClicked) {
        let move_results = undefined;
        if (isRabbitClicked) {
            move_results = this.get_rabbit_moves(cells, row_index, column_index);
            this.cells_cleanup_cache.push([row_index, column_index, cells[row_index][column_index]]);
            cells[row_index][column_index] = "Black_Selected_White";
        }
        else {
            move_results = this.get_wolf_moves(cells, row_index, column_index);
            this.cells_cleanup_cache.push([row_index, column_index, cells[row_index][column_index]]);
            cells[row_index][column_index] = "Black_Selected_Black";
        }
        for (let option of move_results) {
            if (option) {
                this.cells_cleanup_cache.push([option[0], option[1], cells[option[0]][option[1]]]);
                cells[option[0]][option[1]] = "Option";
            }
        }
    }
    get_rabbit_moves(cells, row_index, column_index) {
        const top_right = row_index > 0 && column_index < 7 && cells[row_index - 1][column_index + 1] === "Black"
            ? [row_index - 1, column_index + 1] : undefined;
        const top_left = row_index > 0 && column_index > 0 && cells[row_index - 1][column_index - 1] === "Black"
            ? [row_index - 1, column_index - 1] : undefined;
        const bottom_right = row_index < 7 && column_index < 7 && cells[row_index + 1][column_index + 1] === "Black"
            ? [row_index + 1, column_index + 1] : undefined;
        const bottom_left = row_index < 7 && column_index > 0 && cells[row_index + 1][column_index - 1] === "Black"
            ? [row_index + 1, column_index - 1] : undefined;
        return [top_left, top_right, bottom_right, bottom_left];
    }
    get_wolf_moves(cells, row_index, column_index) {
        const bottom_right = row_index < 7 && column_index < 7 && cells[row_index + 1][column_index + 1] === "Black"
            ? [row_index + 1, column_index + 1] : undefined;
        const bottom_left = row_index < 7 && column_index > 0 && cells[row_index + 1][column_index - 1] === "Black"
            ? [row_index + 1, column_index - 1] : undefined;
        return [bottom_left, bottom_right];
    }
}
VerificationService.ɵfac = function VerificationService_Factory(t) { return new (t || VerificationService)(); };
VerificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VerificationService, factory: VerificationService.ɵfac, providedIn: 'root' });


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
const bootstrap = () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
};
if (typeof window['cordova'] !== 'undefined') {
    document.addEventListener('deviceready', () => {
        bootstrap();
    }, false);
}
else {
    bootstrap();
}


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