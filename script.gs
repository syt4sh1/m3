// Netejar cel·les
function Netejar() {
  var hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  var formulari = hojaActiva.getSheetByName("Formulari");

  var cel·lesANetejar = ["B3", "B6", "B8", "B10", "D6", "D8", "D10"];
  for (var i = 0; i < cel·lesANetejar.length; i++) {
    formulari.getRange(cel·lesANetejar[i]).clearContent();
  }
}

// Desar cel·les
function Desar() {
  var hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  var formulari = hojaActiva.getSheetByName("Formulari");
  var dades = hojaActiva.getSheetByName("Dades");

  var valors = [[formulari.getRange("B6").getValue(),
                 formulari.getRange("B8").getValue(),
                 formulari.getRange("B10").getValue(),
                 formulari.getRange("D6").getValue(),
                 formulari.getRange("D8").getValue(),
                 formulari.getRange("D10").getValue()]];

  dades.getRange(dades.getLastRow() + 1, 1, 1, 6).setValues(valors);

  Netejar();
}

// Cercar
var NUM_COLUMNA_CERCA = 0;
function Cercar() {
  var hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  var formulari = hojaActiva.getSheetByName("Formulari");

  var valor = formulari.getRange("B3").getValue();
  var valors = hojaActiva.getSheetByName("Dades").getDataRange().getValues();
  for (var i = 0; i < valors.length; i++) {
    var fila = valors[i];
    if (fila[NUM_COLUMNA_CERCA] == valor) {
      formulari.getRange("B6").setValue(fila[0]);
      formulari.getRange("B8").setValue(fila[1]);
      formulari.getRange("B10").setValue(fila[2]);
      formulari.getRange("D6").setValue(fila[3]);
      formulari.getRange("D8").setValue(fila[4]);
      formulari.getRange("D10").setValue(fila[5]);
    }
  }
}

// Actualitzar
function Actualitzar() {
  var hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  var formulari = hojaActiva.getSheetByName("Formulari");
  var dades = hojaActiva.getSheetByName("Dades");

  var valor = formulari.getRange("B3").getValue();
  var valors = hojaActiva.getSheetByName("Dades").getDataRange().getValues();
  for (var i = 0; i < valors.length; i++) {
    var fila = valors[i];
    if (fila[NUM_COLUMNA_CERCA] == valor) {
      var INT_F = i + 1;

      var valors1 = [[formulari.getRange("B6").getValue(),
                      formulari.getRange("B8").getValue(),
                      formulari.getRange("B10").getValue(),
                      formulari.getRange("D6").getValue(),
                      formulari.getRange("D8").getValue(),
                      formulari.getRange("D10").getValue()]];

      dades.getRange(INT_F, 1, 1, 6).setValues(valors1);
      SpreadsheetApp.getUi().alert('Dades actualitzades');

      Netejar();
    }
  }
}

// Eliminar
function Eliminar() {
  var hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  var formulari = hojaActiva.getSheetByName("Formulari");
  var dades = hojaActiva.getSheetByName("Dades");

  var interficie = SpreadsheetApp.getUi();
  var resposta = interficie.alert('Esteu segur/a que voleu esborrar?', interficie.ButtonSet.YES_NO);

  if (resposta == interficie.Button.YES) {
    var valor = formulari.getRange("B3").getValue();
    var valors = hojaActiva.getSheetByName("Dades").getDataRange().getValues();
    for (var i = 0; i < valors.length; i++) {
      var fila = valors[i];
      if (fila[NUM_COLUMNA_CERCA] == valor) {
        var INT_F = i + 1;
        dades.deleteRow(INT_F);
        Netejar();
      }
    }
  }
}
