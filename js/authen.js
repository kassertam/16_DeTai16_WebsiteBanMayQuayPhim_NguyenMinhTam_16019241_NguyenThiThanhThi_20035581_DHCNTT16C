$(document).ready(function(){
    //copy nhớ thêm id vào input ở mỗi page
$("#btnDangNhap").on("click",function(){
            
    // console.log(list[0].tendn)
    var tendangnhap = $("#txtTenDN").val()
    var matkhau = $("#txtMatKhau").val()
    //trên này còn mật khẩu copy dưới lên hộ t 
    // sửa alert lại
    var rexTenDN = /^[A-Za-z]*$/ // cái này cho nhập chữ không cho nhập số, tao test cho m thấy
    if(tendangnhap===""){
        alert("Rỗng")
        return false
    }
    if(matkhau===""){
        alert("Rỗng")
        return false
    }
    if(rexTenDN.test(tendangnhap)==false){
        alert("Tên không được nhập số")
        return false
    }
    for(var i = 0;i<list.length;i++){
        if(list[i].tendn===tendangnhap && list[i].matkhau===matkhau){
            alert("Đăng nhập thành công")
            $("#modalLogin").modal("hide")
            window.location.replace("../")
            return true
        }
    }
    alert("Mật khẩu không đúng")
  
    // $("#modalLogin").modal("hide")
    return false
})
$("#btnDangKy").on("click",function(){
    var tendn = $("#txtRegisTenDN").val()
    var email = $("#txtRegisEmail").val()
    var sdt = $("#txtRegisSDT").val()
    var diachi = $("#txtRegisDiaChi").val()
    var matkhau = $("#txtRegisMatKhau").val()
    var rematkhau = $("#txtRegisReMatKhau").val()
    //hàm kiểm tra dữ liệu nhập - biểu thức chính quy
    var regmatkhau = /^[A-Za-z0-9]{6,13}$/ //gồm chữ và số gồm từ 6-13 kí tự
    var regsdt = /^0+[0-9]{10}$/ //bắt đầu bằng 0 và gồm 11 số
    var regemail = /^[A-za-z0-9]{6-13}@gmail.com$/ //gồm 6-13 kí tự trước @gmail.com 

    //Còn tên đăng nhập,   
    if(tendn===""){
        alert("Tên đăng nhập không được rỗng")
        return false
    }
    if(email===""){
        alert("Email không được rỗng")
        return false
    }
    if(regemail.test(email)!=true){
        alert("Email gồm 6-13 kí tự số hoặc chữ trước @gmail.com")
        return false
    }
    if(sdt===""){
        alert("Số điện thoại không được rỗng")
        return false
    }
    if(regsdt.test(sdt)!=true){
        alert("Số điện thoại bắt đầu bằng 0 và gồm 11 số")
        return false
    }
    if(diachi===""){
        alert("Địa chỉ không được rỗng")
        return false
    }
    if(matkhau===""){
        alert("Mật khẩu không được rỗng")
        return false
    }
    if(regmatkhau.test(matkhau)!=true){
        alert("Mật khẩu gồm chữ hoặc số từ 6 đến 13 kí tự")
        return false
    }
    if(rematkhau===""){
        alert("Chưa nhập lại mật khẩu")
        return false
    }
    if(matkhau!=rematkhau){
        alert("Nhập lại mật khẩu không đúng")
        return false
    }
    var user = {
        tendn:tendn,
        matkhau:matkhau,
        email:email,
        sdt:sdt,
        diachi:diachi,
        rematkhau:rematkhau
    }
    list.push(user)
    alert("Đăng ký thành công!")
    $("#modalRegister").modal("hide")
    $("#txtRegisTenDN").val("")
   $("#txtRegisEmail").val("")
    $("#txtRegisSDT").val("")
   $("#txtRegisDiaChi").val("")
    $("#txtRegisMatKhau").val("")
   $("#txtRegisReMatKhau").val("")
    return true
})
})