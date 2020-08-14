//exercitiul 1
function is_string(variable) {
    return typeof variable === "string";
  }
  
  console.log(is_string("w3resource"));
  console.log(is_string([1, 2, 4, 0]));
  
  // exercitiul 2
  function is_Blank(var2) {
    return var2 === "";
  }
  
  console.log(is_Blank(""));
  console.log(is_Blank("abc"));
  
  //exercitiuln 3
  function string_to_array(myvar3) {
    return myvar3.split(" ");
  }
  console.log(string_to_array("Robin Singh"));
  
  //exercitiul 4
  function abbrev_name(myvar4) {
    var split_name = myvar4.split(" ");
    return split_name[0] + " " + split_name[1].charAt(0) + ".";
  }
  console.log(abbrev_name("Robin Singh"));
  
  //exercitiul 5
  function capitalize(var5){
      return var5[0].toUpperCase() + var5.slice(1);
    }
    console.log(capitalize('js string exercises'));
  
    //exercitiul 6
    function truncate_string(var6,var7){
      return var6.slice(0,var7);
    }
    console.log(truncate_string("Robin Singh",4));
  
    //exercitiul 7
    function isUpperCaseAt(var8,var9){
      return var8 == var8.toUpperCase(var9);
    }
    console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
  
    //exercitiul 8
    function insert(var10,var11,var12){
      return var10.slice(0,var12)+ var11 + var10.slice(var12);
    }
    console.log(insert('We are doing some exercises.','JavaScript ',18));
  
    //exercitiul 9
    function remove_first_occurrence(var13,var14){
      return var13.replace(var14,);
    }
    console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
  
    //exercitiul 10
    function compare_strings(var15,var16){
      return var15.IgnoreCase == var16.ignoreCase;
    }
    console.log(compare_strings('abcd','AbcD'));
  
    //exercitiul 11
    function Uncapitalize(var17){
      return var17.toLowerCase(0);
    }
    console.log(Uncapitalize('Js string exercises'));