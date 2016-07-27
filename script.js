$(document).ready (lien)

function lien () {
    $.ajax({
       url : "http://docusland.fr/code-academie/js_bruteforce/dico.txt",
        dataType :  "html";
         success : function(code_html, statut){
       },
       error : function(resultat, statut, erreur){
       }
    });
}
