(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{683:function(e,t,n){!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var w=n[o]={exports:{}};t[o][0].call(w.exports,(function(e){var n=t[o][1][e];return s(n||e)}),w,w.exports,e,t,n,r)}return n[o].exports}for(var i=!1,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(e,t,n){"use strict";n.SwipeJS=new class{construct(){this.swipeDirection=null,this.swipeClicked=!0,this.swipeStarted=!1,this.swipeElement=null,this.currentX=0,this.currentY=0,this.startX=0,this.startY=0}addMouseListeners(){this.mouseDownListener(),this.mouseUpListener(),this.mouseMoveListener()}reset(){this.swipeDirection=null,this.swipeClicked=!1,this.swipeElement=null}mouseDownListener(){document.body.addEventListener("mousedown",e=>{this.down(e,this)}),document.body.addEventListener("touchstart",e=>{this.down(e,this)})}mouseUpListener(){document.body.addEventListener("mouseup",e=>{this.up(e,this)}),document.body.addEventListener("touchend",e=>{this.up(e,this)})}up(e,t){t.swipeClicked&&t.swipeDirection?t.swipeElement.dispatchEvent(new CustomEvent("swipe.end",{bubbles:!0,detail:{direction:t.swipeDirection,x:t.currentX,y:t.currentY}})):t.swipeClicked&&!t.swipeDirection&&t.swipeElement.dispatchEvent(new CustomEvent("swipe.cancel",{bubbles:!0})),t.reset()}down(e,t){t.swipeClicked=!0,t.swipeElement=e.srcElement,e instanceof TouchEvent?(t.startX=e.changedTouches[0].clientX,t.startY=e.changedTouches[0].clientY):(t.startX=e.x,t.startY=e.y)}move(e,t){if(t.swipeClicked){e instanceof TouchEvent?(t.currentX=e.changedTouches[0].clientX,t.currentY=e.changedTouches[0].clientY):(t.currentX=e.x,t.currentY=e.y);let n=t.currentX-t.startX,r=t.currentY-t.startY;n>SwipeJSConfig.sensitivityX?r>SwipeJSConfig.sensitivityY?t.swipeDirection=SwipeJSConfig.SOUTH_EAST:r<-SwipeJSConfig.sensitivityY?t.swipeDirection=SwipeJSConfig.NORTH_EAST:t.swipeDirection=SwipeJSConfig.EAST:n<-SwipeJSConfig.sensitivityX?r>SwipeJSConfig.sensitivityY?t.swipeDirection=SwipeJSConfig.SOUTH_WEST:r<-SwipeJSConfig.sensitivityY?t.swipeDirection=SwipeJSConfig.NORTH_WEST:t.swipeDirection=SwipeJSConfig.WEST:r>SwipeJSConfig.sensitivityY?t.swipeDirection=SwipeJSConfig.SOUTH:r<-SwipeJSConfig.sensitivityY?t.swipeDirection=SwipeJSConfig.NORTH:t.swipeDirection=null,t.swipeStarted?t.swipeElement.dispatchEvent(new CustomEvent("swipe.progress",{bubbles:!0,detail:{direction:t.swipeDirection,x:t.currentX,y:t.currentY}})):(t.swipeStarted=!0,t.swipeElement.dispatchEvent(new CustomEvent("swipe.start",{bubbles:!0})))}}mouseMoveListener(){document.body.addEventListener("mousemove",e=>{this.move(e,this)}),document.body.addEventListener("touchmove",e=>{this.move(e,this)})}}},{}],2:[function(e,t,n){"use strict";let r=20,o=20;n.SwipeJSConfig=class{static get sensitivityX(){return r}static get sensitivityY(){return o}static set sensitivityX(e){r=e}static set sensitivityY(e){o=e}static get NORTH(){return 1}static get SOUTH(){return 2}static get WEST(){return 3}static get EAST(){return 4}static get NORTH_WEST(){return 5}static get NORTH_EAST(){return 6}static get SOUTH_WEST(){return 7}static get SOUTH_EAST(){return 8}}},{}],3:[function(e,t,n){window.SwipeJS=e("./SwipeJS").SwipeJS,window.SwipeJSConfig=e("./SwipeJSConfig").SwipeJSConfig,SwipeJS.addMouseListeners()},{"./SwipeJS":1,"./SwipeJSConfig":2}]},{},[3])}}]);