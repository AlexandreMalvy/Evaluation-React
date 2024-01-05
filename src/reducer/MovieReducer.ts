import {Action} from "../type/action.tsx";

export default function MovieReducer(state, action) {
    switch (action.type) {
        case 'AJOUTER AUX FAVORIS':
            return state = 1;
        case 'RETIRER DES FAVORIS':
            return state = 0;
    
        default:
            return state;
    }
}

