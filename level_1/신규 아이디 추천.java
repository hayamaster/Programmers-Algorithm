class Solution {
    public String solution(String new_id) {
        String str = "";
        new_id = new_id.toLowerCase();
        new_id = new_id.replaceAll("[^-_.0-9a-z]", "");
        str = duplicatedComma(new_id);
        str = commaTemp(str);
        str = (str.length() == 0) ? "a" : str;
        if (str.length() > 15)
        {
            str = str.substring(0, 15);
            str = commaTemp(str);
        }
        while (str.length() < 3)
        {
            str += str.charAt(str.length() - 1);
        }
        return str;
    }
    
    public String duplicatedComma(String new_id){
        String str = "";
        for (int i = 0; i < new_id.length(); i++)
        {
            if (str != "" && new_id.charAt(i) == '.' && str.charAt(str.length() - 1) == '.')
                continue;
            str += new_id.charAt(i);
        }
        return str;
    }
    
    public String commaTemp(String str){
        if (str.charAt(0) == '.')
            str = str.substring(1);
        if (str.length() != 0 && str.charAt(str.length() - 1) == '.')
            str = str.substring(0, str.length() - 1);
        return str;
    }   
}