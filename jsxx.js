
function right_menu2() {
    const abi = document.getElementById("main_body-right-menu2-refesh-icon")
    const abmi = document.getElementById("main_body-right-menu2-refesh")
    abi.onclick = function (e) {
        this.classList.add("active")
    }
    abi.onanimationend = function (e) {
        this.classList.remove("active")
    }
    abmi.onclick = function () {
        abi.click();
    }
}
function right_menu3() {
    const abi = document.getElementById("main_body-right-menu3-refesh-icon")
    const abmi = document.getElementById("main_body-right-menu3-refesh")
    abi.onclick = function (e) {
        this.classList.add("active")
    }
    abi.onanimationend = function (e) {
        this.classList.remove("active")
    }
    abmi.onclick = function () {
        abi.click();
    }
}

function demx() {
    let dem = 0;
    return function (x) {
        if (x !== undefined) {
            dem = x;
        } else {
            return dem;
        }
    }

}
function set_active() {
    const ab = document.querySelectorAll(".header_nav-button-button_select")
    const acx = document.getElementById("main_body-right-menu1-span")
    let active_x = demx();

    function active1() {
        ab[active_x()].style.setProperty('--display', 'block');
        ab[active_x()].classList.add("active");
        acx.childNodes[0].nodeValue = ab[active_x()].childNodes[1].textContent;
    }
    function change_active_class() {
        for (let i = 0; i < ab.length; i++) {
            ab[i].onclick = function (e) {
                ab[active_x()].style.setProperty('--display', 'none');
                ab[active_x()].classList.remove("active");
                this.style.setProperty('--display', 'block');
                this.classList.add("active");
                acx.childNodes[0].nodeValue = this.childNodes[1].textContent;
                active_x(i);

            }
        }
    }
    active1();
    change_active_class();
}
function access_form() {
    const dang_nhap = document.getElementById("timkiem_dangnhap-dangnhap");
    const dang_nhap_f = document.getElementById("Dang_nhap");
    const dang_nhap_f_c = document.getElementById("Dangnhap_input-close");
    dang_nhap.addEventListener("click", function (e) {
        dang_nhap_f.classList.add("active")
    })
    dang_nhap_f_c.addEventListener("click", function (e) {
        dang_nhap_f.classList.remove("active")
    })
}

function xxxxx() {
    const timkiem_input = document.getElementById("timkiem_input");
    const timkiem_dangnhap_timkiem = document.getElementById("timkiem_dangnhap-timkiem");
    const timkiem_input_i = document.getElementById("timkiem_input-input");

    timkiem_dangnhap_timkiem.addEventListener("click", function (e) {
        console.log(e.target);
        timkiem_input.classList.add("active");
    }
    )

    timkiem_input.childNodes[5].addEventListener("click", function () {
        timkiem_input.classList.remove("active");
        timkiem_input_i.value = "";
    }
    )
}
function datashett() {
    const x = document.getElementById("header_nav-city");
    const x2 = document.querySelectorAll("*");
    const x_check = document.querySelector("div#header_nav-city.header_nav-margin_all");
    const x_check1 = document.querySelector("p#header_nav-city-text");
    const x_Check2 = document.querySelector("i#active_down.fa-solid.fa-angle-down.fa-sm");
    for (let i = 0; i < x2.length; i++) {
        if (x2[i] !== x_check && x2[i] !== x_check1 && x2[i] !== x_Check2) {
            x2[i].addEventListener("click", function (e) {
                if (x.classList.contains("active")) {
                    x.classList.remove("active")
                    e.stopPropagation();
                }

            })
        } else {
            x2[i].addEventListener("click", function (e) {
                x.classList.toggle('active');
                e.stopPropagation();

            })
        }

    }
}
function array_city_text() {
    const array_text = [
        "TP HCM",
        "Hà Nội",
        "Bắc Ninh",
        "Thanh Hóa",
        "Nghệ An",
    ]
    let avc = [];
    let c = 0;

   
    function set_vt_q_h(value){
        let c_html=[];
        const array_text_city_c = [
            {
                id: "TP HCM",
                q_h: ['Quận 1', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6',
                    'Quận 7', 'Quận 8', 'Quận 10', 'Quận 11', 'Quận 12',
                    'Bình Tân', 'Bình Thạnh', 'Gò Vấp', 'Phú Nhuận', 'Tân Bình',
                    'Tân Phú', 'Thủ Đức', 'Bình Chánh', 'Cần Giờ', 'Củ Chi',
                    'Hóc Môn', 'Nhà Bè']
            },
            {
                id: "Hà Nội",
                q_h: ['Ba Đình', 'Bắc Từ Liêm', 'Cầu Giấy', 'Đống Đa',
                    'Hà Đông', 'Hai Bà Trưng', 'Hoàn Kiếm', 'Hoàng Mai',
                    'Long Biên', 'Nam Từ Liêm', 'Tây Hồ', 'Thanh Xuân',
                    'Sơn Tây', 'Ba Vì', 'Chương Mỹ', 'Đan Phượng',
                    'Đông Anh', 'Gia Lâm', 'Hoài Đức', 'Mê Linh',
                    'Mỹ Đức', 'Phú Xuyên', 'Phúc Thọ', 'Quốc Oai',
                    'Sóc Sơn', 'Thạch Thất', 'Thanh Oai',
                    'Thanh Trì', 'Thường Tín']
            },
            {
                id: "Bắc Ninh",
                q_h: ['Bắc Ninh', 'Từ Sơn', 'Gia Bình', 'Lương Tài', 'Quế Võ',
                    'Thuận Thành', 'Tiên Du', 'Yên Phong']
            }
            ,
            {
                id: "Thanh Hóa",
                q_h: ['Thanh Hóa', 'Sầm Sơn', 'Bỉm Sơn', 'Nghi Sơn', 'Bá Thước',
                    'Cẩm Thủy', 'Đông Sơn', 'Hà Trung', 'Hậu Lộc', 'Hoằng Hóa',
                    'Lang Chánh', 'Mường Lát', 'Nga Sơn', 'Ngọc Lặc', 'Như Thanh',
                    'Như Xuân', 'Nông Cống', 'Quan Hóa', 'Quan Sơn', 'Quảng Xương',
                    'Thạch Thành', 'Thiệu Hóa', 'Thọ Xuân', 'Thường Xuân', 'Triệu Sơn',
                    'Vĩnh Lộc', 'Yên Định']
            }
            ,
            {
                id: "Nghệ An",
                q_h:['Vinh', 'Cửa Lò', 'Hoàng Mai', 'Thái Hòa', 'Anh Sơn', 'Con Cuông',
                 'Diễn Châu', 'Đô Lương', 'Hưng Nguyên']
            }
    
        ]
        for(let i=0;i<array_text_city_c.length;i++){
            if(value===array_text_city_c[i].id){
                c_html=array_text_city_c[i].q_h;
            }
        }
        let htmlvalue_vtq_h1=`<option value="">Chọn Quận/Huyện</option>`;
        for(let i=0;i<c_html.length;i++){
            htmlvalue_vtq_h1=htmlvalue_vtq_h1+`<option value=${c_html[i]}>${c_html[i]}</option>`;
        }
        return htmlvalue_vtq_h1;
    }
    const mbr_m4vt_qh=document.getElementById("main_body-right-menu4-vitri_q_h");
    let htmlvalue = "";
    array_text.map(function (value, index) {
        if (index == 0) {
            document.querySelector('#header_nav-city-text').innerText = value;
            document.querySelector('#main_body-left-diadiem_vitri').innerText = `Có x địa điểm tại ${value} từ 0:0' đến 23:59'`;
            mbr_m4vt_qh.innerHTML=set_vt_q_h(value);
        }
        htmlvalue = htmlvalue + `<div class="header_nav-city_datasheet-city"><p style="line-height:36px; position: absolute;left:10px">${value}</p></div>`;
    })
    const x1 = document.getElementById("header_nav-city_datasheet");
    x1.innerHTML = htmlvalue;

    const header_nav_city_datasheet_city = document.querySelectorAll(".header_nav-city_datasheet-city");
    for (let i = 0; i < header_nav_city_datasheet_city.length; i++) {
        header_nav_city_datasheet_city[i].addEventListener("click", function (e) {
            document.querySelector('#header_nav-city-text').innerText = header_nav_city_datasheet_city[i].textContent;
            document.querySelector('#main_body-left-diadiem_vitri').innerText = `Có x địa điểm tại ${header_nav_city_datasheet_city[i].textContent} từ 0:0' đến 23:59'`;
            mbr_m4vt_qh.innerHTML=set_vt_q_h(header_nav_city_datasheet_city[i].textContent);
        })
    }
}
function set_access_menu4() {
    const mbr_mn1_p = document.querySelectorAll("#main_body-right-menu4-nav-1>p");
    let check = 0;
    for (let i = 0; i < mbr_mn1_p.length; i++) {
        mbr_mn1_p[i].addEventListener("click", function () {
            mbr_mn1_p[check].classList.toggle("active");
            this.classList.toggle("active");
            check = i;
        })
    }
}
access_form();
xxxxx();
datashett()
set_active();
array_city_text();
right_menu2();
right_menu3();
set_access_menu4();




