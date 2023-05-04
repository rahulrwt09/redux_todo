import {legacy_createStore} from "redux"
import { reducer } from "./reducer"
const initialstate= {
     todo:[],
}
export const store = legacy_createStore(reducer, initialstate)