function niveles() {
  var activo= document.getElementById("activo").value;
  
  //document.getElementById("amp").innerHTML= activo;
  let mactivo=[["HGBT","CISCO",6," planos",3,24,34,10.5],//amplif-familia-ch30-ch124-plana-salidas-voltaje-padAGC
    ["HGD","CISCO",7," planos","2 o 3",24,34,10.5],
    ["GMLE","CISCO",9," 13db",1,12,29,9],
    ["GSLE","CISCO",6," planos",1,12,"NA","NA"],
    ["BTD","MOTOROLA",6," planos",4,24,7,"NA"],
    ["MB","MOTOROLA",7," planos","2 o 3",24,11,"NA"],
    ["BLE1","MOTOROLA",12," planos",1,12,7,"NA"],
    ["BLE2","MOTOROLA",9," 13db",1,12,7,"NA"],
   ["BHA","MOTOROLA",8," planos",1,"NA","NA","NA"]
    ];
    amp1=0;
    amp1 = amp1 + "<table> ";
    for (var i = 0; i < mactivo.length; i++) {
      if (mactivo[i][0] == activo) {
        
        amp1= amp1+"<tr><td>Niveles in<td>"+ mactivo[i][2];
        var inb = mactivo[i][2];
        amp1= amp1+ mactivo[i][3];
        amp1= amp1+"<tr><td>Salidas<td>"+ mactivo[i][4];
        amp1= amp1+"<tr><td>Voltaje<td>"+ mactivo[i][5];
        amp1= amp1+"<tr><td>PAD AGC<td>"+ mactivo[i][6];
        amp1= amp1+"<tr><td>EQ inter etapa<td>"+ mactivo[i][7];
        amp1 = amp1+"</table>";
        var fam= mactivo[i][1];

        document.getElementById("amp1").innerHTML=amp1;
        
      }
    }//cierre activo
    let tabla = "";
      document.getElementById("tabla").innerHTML=tabla;
    if (fam == "CISCO") {
      
      var b = document.form.chb.value;
      var a = document.form.cha.value;
      if (activo == "GMLE"){a=a-4};
      
      tabla = "<table>";
      tabla=tabla+"<th colspan='6'>CISCO";
        if (b>=a) {
      
          tabla=tabla+"<tr><th>EQ</th><th>CH30</th><th>CH124</th><th>BAJO</th><th>ALTO</th><th>DIF</th><tr>";
  
          let eq = [0,1.5,3.0,4.5,6,7.5,9,10.5,12,13.5,15,16.5,18,19.5,21,22.5,24,25.5,27,28.5,30];
          let ch30 =[0,1.8,2.7,3.5,4.3,5.2,6,6.9,7.7,8.5,9.4,10.2,11,11.9,12.8,14,14.9,15.7,16.6,17.3,18.2];
          let ch124 =[0,1.2,1.4,1.6,1.7,1.9,2.2,2.4,2.5,2.7,2.9,3.2,3.4,3.6,3.8,4.1,4.3,4.5,4.7,4.9,5.1];
    
          for (var i = 0; i < eq.length; i++) {
            // Tab to edit
            let dato = eq[i];
            let dato1 = ch30[i];
            let dato2 = ch124[i];
            let dato3 = b-ch30[i];
            dato3= dato3.toFixed(1);
            let dato4 = a-ch124[i];
            dato4= dato4.toFixed(1);
            let dato5= dato3-dato4;
            dato5 = dato5.toFixed(1);
            dato5=Math.abs(dato5);
            tabla= tabla+"<tr>";
            tabla= tabla+"<td>"+dato;
            tabla= tabla+"<td>"+dato1;
            tabla= tabla+"<td>"+dato2;
            tabla= tabla+"<td>"+dato3;
            tabla= tabla+"<td>"+dato4;
            tabla= tabla+"<td>"+dato5+"<tr/>";
          }
  
          tabla = tabla+"<table> ";
          document.getElementById("tabla").innerHTML=tabla;
        }
        else {
          tabla=tabla+"<tr><th>INV</th><th>CH30</th><th>CH124</th><th>BAJO</th><th>ALTO</th><th>DIF</th><tr>";
      
          let inv = [1.6,3.3,4.9,6.5,8.1,9.8,11.4,13.0,14.6,16.2];
          let ch30 = [1.4,1.8,2.2,2.6,2.9,3.3,3.7,4.1,4.5,4.8];
          let ch124 = [2.1,3.1,4.3,5.4,6.5,7.6,8.8,9.9,11,12];
  
          for (var i = 0; i < inv.length; i++) {
            // Tab to edit
            let dato = inv[i];
            let dato1 = ch30[i];
            let dato2 = ch124[i];
            let dato3 = b - ch30[i];
            dato3 = dato3.toFixed(1);
            let dato4 = a - ch124[i];
            dato4 = dato4.toFixed(1);
            let dato5= dato3-dato4;
            dato5 = dato5.toFixed(1);
            dato5=Math.abs(dato5);
            tabla = tabla + "<tr>";
            tabla = tabla + "<td>" + dato;
            tabla = tabla + "<td>" + dato1;
            tabla = tabla + "<td>" + dato2;
            tabla = tabla + "<td>" + dato3;
            tabla = tabla + "<td>" + dato4;
            tabla = tabla + "<td>" + dato5+"</tr>";
    
    
          }
        tabla = tabla + "<table border='1'> ";
        document.getElementById("tabla").innerHTML = tabla;
        }
      }
  //*****MOTOROLA*****
      else {
      var b = document.form.chb.value;
      var a = document.form.cha.value;
      if (activo=="BLE2"){a=a-4};
      tabla = "<table>";
      tabla=tabla+"<th colspan='6'>MOTOROLA";
        if (b>=a) {
      
          tabla=tabla+"<tr><th>EQ</th><th>CH30</th><th>CH124</th><th>BAJO</th><th>ALTO</th><th>DIF</th><tr>";
  
          let eq = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
          let ch30 =[1,1.5,1.9,2.4,2.8,3.3,3.7,4.2,4.6,5.1,5.5,6,6.4,6.9,7.3,7.8,8.2,8.7,9.2,9.6,10.1,10.5,11,11.8,11.9];
          let ch124 =[1,1.1,1.2,1.3,1.4,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.5,2.6,2.7,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7];
    
          for (var i = 0; i < eq.length; i++) {
            // Tab to edit
            let dato = eq[i];
            let dato1 = ch30[i];
            let dato2 = ch124[i];
            let dato3 = b-ch30[i];
            dato3= dato3.toFixed(1);
            let dato4 = a-ch124[i];
            dato4= dato4.toFixed(1);
            let dato5= dato3-dato4;
            dato5 = dato5.toFixed(1);
            dato5=Math.abs(dato5);
            tabla= tabla+"<tr>";
            tabla= tabla+"<td>"+dato;
            tabla= tabla+"<td>"+dato1;
            tabla= tabla+"<td>"+dato2;
            tabla= tabla+"<td>"+dato3;
            tabla= tabla+"<td>"+dato4;
            tabla= tabla+"<td>"+dato5+"<tr/>";
          }
          tabla = tabla+"<table> ";
          document.getElementById("tabla").innerHTML=tabla;
        }
        else {
          tabla=tabla+"<tr><th>INV</th><th>CH30</th><th>CH124</th><th>BAJO</th><th>ALTO</th><th>DIF</th><tr>";
      
          let inv = [1,2,3,4,5,6,7,8,9,10];
          let ch30 = [1.5,2,2.5,2.9,3.4,3.9,4.4,4.9,5.4,5.9];
          let ch124 = [2,3.1,4.1,5.2,6.2,7.3,8.3,9.4,10.4,11.5];
  
          for (var i = 0; i < inv.length; i++) {
            // Tab to edit
            let dato = inv[i];
            let dato1 = ch30[i];
            let dato2 = ch124[i];
            let dato3 = b - ch30[i];
            dato3 = dato3.toFixed(1);
            let dato4 = a - ch124[i];
            dato4 = dato4.toFixed(1);
            let dato5= dato3-dato4;
            dato5 = dato5.toFixed(1);
            dato5=Math.abs(dato5);
            tabla = tabla + "<tr>";
            tabla = tabla + "<td>" + dato;
            tabla = tabla + "<td>" + dato1;
            tabla = tabla + "<td>" + dato2;
            tabla = tabla + "<td>" + dato3;
            tabla = tabla + "<td>" + dato4;
            tabla = tabla + "<td>" + dato5+"</tr>";
    
          }
        tabla = tabla + "</table> ";
        document.getElementById("tabla").innerHTML = tabla;
        }
      }
    
  }