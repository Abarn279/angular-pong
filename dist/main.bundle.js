webpackJsonp([1,4],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    Angular Pong\r\n</h1>\r\n<pong></pong>"

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<canvas #PongCanvas width=\"{{width}}\" height=\"{{height}}\"></canvas>"

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveableObject; });
var MoveableObject = (function () {
    /**
     * Constructs a moveable object
     * @param {Number} height - the height of the moveable object, in pixels
     * @param {Number} width - the width of the moveable object, in pixels
     * @param {Number} maxSpeed - the max distance, in pixels, the object can move
     * @param {Number} position - the initial position of the object
     */
    function MoveableObject(height, width, maxSpeed, position) {
        this.height = height;
        this.width = width;
        this.maxSpeed = maxSpeed;
        this.position = position;
    }
    /**
     * Moves default amount, scalable by a percentage of the object's max speed
     * @param {Number} xratio - the percentage of maxSpeed to move in x direction
     * @param {Number} yratio - the percentage of maxSpeed to move in y direction
     */
    MoveableObject.prototype.move = function (speedRatio) {
        this.position.x += this.maxSpeed * speedRatio.x;
        this.position.y += this.maxSpeed * speedRatio.y;
    };
    /**
     * @return {Position} - The current position of this object
     */
    MoveableObject.prototype.getPosition = function () {
        return this.position;
    };
    /**
     * @return {Boundaries} - The current boundaries of the object, helpful for collision checking
     */
    MoveableObject.prototype.getCollisionBoundaries = function () {
        return {
            top: this.position.y - this.height / 2,
            bottom: this.position.y + this.height / 2,
            right: this.position.x + this.width / 2,
            left: this.position.x - this.width / 2
        };
    };
    MoveableObject.prototype.getWidth = function () {
        return this.width;
    };
    MoveableObject.prototype.getHeight = function () {
        return this.height;
    };
    return MoveableObject;
}());

//# sourceMappingURL=moveable-object.js.map

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(89);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(146),
        styles: [__webpack_require__(143)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pong_pong_component__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pong_pong_component__["a" /* PongGameComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moveable_object__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ball; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(height, width, maxSpeed, position, speedRatio) {
        var _this = _super.call(this, height, width, maxSpeed, position) || this;
        _this.speedRatio = speedRatio;
        return _this;
    }
    /**
     * Reverses the ball in the x direction
     */
    Ball.prototype.reverseX = function () {
        this.speedRatio.x = -this.speedRatio.x;
    };
    /**
     * Reverses the ball in the y direction
     */
    Ball.prototype.reverseY = function () {
        this.speedRatio.y = -this.speedRatio.y;
    };
    /**
     * Sets new vertical speed ratio of max speed
     */
    Ball.prototype.setVerticalSpeedRatio = function (verticalSpeedRatio) {
        this.speedRatio.y = verticalSpeedRatio;
    };
    /**
     * Moves object using existing speed ratio
     */
    Ball.prototype.move = function () {
        _super.prototype.move.call(this, this.speedRatio);
    };
    return Ball;
}(__WEBPACK_IMPORTED_MODULE_0__moveable_object__["a" /* MoveableObject */]));

//# sourceMappingURL=ball.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moveable_object__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paddle; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Paddle = (function (_super) {
    __extends(Paddle, _super);
    function Paddle(height, width, maxSpeed, position) {
        var _this = _super.call(this, height, width, maxSpeed, position) || this;
        _this.speedRatio = { x: 0, y: 0 };
        return _this;
    }
    /**
     * Accelerates towards the max speed in the down direction
     * @param ratioChange - the percentage of the max speed that the paddle should accelerate to
     */
    Paddle.prototype.accelerateDown = function (ratioChange) {
        if (ratioChange < 0 || ratioChange > 1)
            return;
        this.speedRatio.y = Math.min(1, this.speedRatio.y + ratioChange);
    };
    /**
     * Accelerates towards the max speed in the up direction
     * @param ratioChange - the percentage of the max speed that the paddle should accelerate to
     */
    Paddle.prototype.accelerateUp = function (ratioChange) {
        if (ratioChange < 0 || ratioChange > 1)
            return;
        this.speedRatio.y = Math.max(-1, this.speedRatio.y - ratioChange);
    };
    /**
     * Decelerate the object towards zero
     * @param ratioChange - the percentage of the max speed that the paddle should decelerate
     */
    Paddle.prototype.decelerate = function (ratioChange) {
        if (this.speedRatio.y < 0) {
            this.speedRatio.y = Math.max(this.speedRatio.y + ratioChange, 0);
        }
        if (this.speedRatio.y > 0) {
            this.speedRatio.y = Math.min(this.speedRatio.y - ratioChange, 0);
        }
    };
    Paddle.prototype.move = function () {
        _super.prototype.move.call(this, this.speedRatio);
    };
    return Paddle;
}(__WEBPACK_IMPORTED_MODULE_0__moveable_object__["a" /* MoveableObject */]));

//# sourceMappingURL=paddle.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paddle__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PongGame; });


var PongGame = (function () {
    function PongGame(height, width) {
        this.height = height;
        this.width = width;
        // Construct game objects
        this.ball = new __WEBPACK_IMPORTED_MODULE_0__ball__["a" /* Ball */](15, 15, 2, { x: height / 2, y: width / 2 }, { x: 1, y: 1 });
        this.playerPaddle = new __WEBPACK_IMPORTED_MODULE_1__paddle__["a" /* Paddle */](100, 20, 1, { x: 50, y: height / 2 });
        this.enemyPaddle = new __WEBPACK_IMPORTED_MODULE_1__paddle__["a" /* Paddle */](100, 20, 1, { x: width - 50, y: height / 2 });
    }
    PongGame.prototype.tick = function (controlState) {
        this.ball.move();
        if (controlState.upPressed)
            this.playerPaddle.accelerateUp(.1);
        else if (controlState.downPressed)
            this.playerPaddle.accelerateDown(.1);
        else
            this.playerPaddle.decelerate(.1);
        this.playerPaddle.move();
        this.moveEnemyPaddle();
        this.checkCollisions();
    };
    PongGame.prototype.moveEnemyPaddle = function () {
        if (this.ball.getPosition().y < this.enemyPaddle.getPosition().y) {
            this.enemyPaddle.accelerateUp(1);
            this.enemyPaddle.move();
        }
        else {
            this.enemyPaddle.accelerateDown(1);
            this.enemyPaddle.move();
        }
    };
    PongGame.prototype.checkCollisions = function () {
        // Bounce off top/bottom
        var ballBounds = this.ball.getCollisionBoundaries();
        if (ballBounds.bottom >= this.height || ballBounds.top <= 0)
            this.ball.reverseY();
        // Player paddle hit
        var paddleBounds = this.playerPaddle.getCollisionBoundaries();
        if (ballBounds.left <= paddleBounds.right &&
            paddleBounds.right - ballBounds.left <= 3 &&
            ballBounds.bottom >= paddleBounds.top &&
            ballBounds.top <= paddleBounds.bottom) {
            this.ball.reverseX();
            // Set vertical speed ratio by taking ratio of 
            // dist(centerOfBall, centerOfPaddle) to dist(topOfPaddle, centerOfPaddle)
            // Negate because pixels go up as we go down :)
            var vsr = -(this.ball.getPosition().y - this.playerPaddle.getPosition().y)
                / (paddleBounds.top - this.playerPaddle.getPosition().y);
            // Max vsr is 1
            vsr = Math.min(vsr, 1);
            this.ball.setVerticalSpeedRatio(vsr);
        }
        // Enemy paddle hit
        paddleBounds = this.enemyPaddle.getCollisionBoundaries();
        if (ballBounds.right <= paddleBounds.left &&
            paddleBounds.left - ballBounds.right <= 3 &&
            ballBounds.bottom >= paddleBounds.top &&
            ballBounds.top <= paddleBounds.bottom) {
            this.ball.reverseX();
            // Set vertical speed ratio by taking ratio of 
            // dist(centerOfBall, centerOfPaddle) to dist(topOfPaddle, centerOfPaddle)
            // Negate because pixels go up as we go down :)
            var vsr = -(this.ball.getPosition().y - this.enemyPaddle.getPosition().y)
                / (paddleBounds.top - this.enemyPaddle.getPosition().y);
            // Max vsr is 1
            vsr = Math.min(vsr, 1);
            this.ball.setVerticalSpeedRatio(vsr);
        }
    };
    PongGame.prototype.gameOver = function () {
        var collisionBoundaries = this.ball.getCollisionBoundaries();
        if (this.ball.getCollisionBoundaries().left <= 0 ||
            this.ball.getCollisionBoundaries().right >= this.width)
            return true;
        else
            return false;
    };
    return PongGame;
}());

//# sourceMappingURL=pong-game.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Controls; });
var Controls;
(function (Controls) {
    Controls[Controls["Up"] = 38] = "Up";
    Controls[Controls["Down"] = 40] = "Down";
})(Controls || (Controls = {}));
//# sourceMappingURL=controls.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_controls__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_pong_game__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PongGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PongGameComponent = (function () {
    function PongGameComponent() {
        this.width = 800;
        this.height = 600;
        this.ticksPerSecond = 60;
        this.pongGame = new __WEBPACK_IMPORTED_MODULE_2__classes_pong_game__["a" /* PongGame */](this.height, this.width);
        this.controlState = { upPressed: false, downPressed: false };
    }
    PongGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.context = this.canvasElement.nativeElement.getContext('2d');
        this.renderFrame();
        // Game model ticks 60 times per second. Doing this keeps same game speed
        // on higher FPS environments.
        setInterval(function () { return _this.pongGame.tick(_this.controlState); }, 1 / this.ticksPerSecond);
    };
    PongGameComponent.prototype.renderFrame = function () {
        var _this = this;
        // Only run if game still going
        if (this.pongGame.gameOver()) {
            this.context.font = "30px Arial";
            this.context.fillText("Game Over!", 50, 50);
            return;
        }
        // Draw background
        this.context.fillStyle = 'rgb(0,0,0)';
        this.context.fillRect(0, 0, this.width, this.height);
        // Set to white for game objects
        this.context.fillStyle = 'rgb(255,255,255)';
        var bounds;
        // Draw player paddle
        var paddleObj = this.pongGame.playerPaddle;
        bounds = paddleObj.getCollisionBoundaries();
        this.context.fillRect(bounds.left, bounds.top, paddleObj.getWidth(), paddleObj.getHeight());
        // Draw enemy paddle
        var enemyObj = this.pongGame.enemyPaddle;
        bounds = enemyObj.getCollisionBoundaries();
        this.context.fillRect(bounds.left, bounds.top, enemyObj.getWidth(), enemyObj.getHeight());
        // Draw ball
        var ballObj = this.pongGame.ball;
        bounds = ballObj.getCollisionBoundaries();
        this.context.fillRect(bounds.left, bounds.top, ballObj.getWidth(), ballObj.getHeight());
        // Render next frame
        window.requestAnimationFrame(function () { return _this.renderFrame(); });
    };
    PongGameComponent.prototype.keyUp = function (event) {
        if (event.keyCode == __WEBPACK_IMPORTED_MODULE_1__enums_controls__["a" /* Controls */].Up) {
            this.controlState.upPressed = true;
        }
        if (event.keyCode == __WEBPACK_IMPORTED_MODULE_1__enums_controls__["a" /* Controls */].Down) {
            this.controlState.downPressed = true;
        }
    };
    PongGameComponent.prototype.keyDown = function (event) {
        if (event.keyCode == __WEBPACK_IMPORTED_MODULE_1__enums_controls__["a" /* Controls */].Up) {
            this.controlState.upPressed = false;
        }
        if (event.keyCode == __WEBPACK_IMPORTED_MODULE_1__enums_controls__["a" /* Controls */].Down) {
            this.controlState.downPressed = false;
        }
    };
    return PongGameComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('PongCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], PongGameComponent.prototype, "canvasElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PongGameComponent.prototype, "keyUp", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PongGameComponent.prototype, "keyDown", null);
PongGameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'pong',
        template: __webpack_require__(147),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [])
], PongGameComponent);

var _a;
//# sourceMappingURL=pong.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[172]);
//# sourceMappingURL=main.bundle.js.map