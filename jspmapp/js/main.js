import $ from 'jquery'
import {makeStartingBoard, buildBoard, renderBoard} from './board.js'

renderBoard(makeStartingBoard(buildBoard()))
