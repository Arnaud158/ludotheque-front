export interface JeuRequest {
    nom: string;
    description: string;
    langue: string;
    age_min:number;
    nombre_joueurs_min:number;
    nombre_joueurs_max:number;
    duree_partie:number;
    categorie:string;
    theme: string;
    editeur: string;
}