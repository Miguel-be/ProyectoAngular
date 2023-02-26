//Se declara la interface de los datos que se recogen del api de Wikipedia
export interface apiWiki {
    type?:          string;
    title?:         string;
    displaytitle?:  string;   
    wikibase_item?: string;
    pageid?:        number;    
    lang?:          string;
    dir?:           string;
    revision?:      string;
    tid?:           string;
    timestamp?:     Date;
    description?:   string;
    extract?:       string;
    extract_html?:  string;
  }