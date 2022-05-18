
let data = [
  {
    "first_name": "Jammal",
    "last_name": "Soldi",
    "gender": "Male",
    "email": "jsoldi0@mapquest.com",
    "phone_number": "+46-953-874-3269",
    "avatar": "https://robohash.org/temporanobisrerum.png?size=400x300&set=set1",
    "job_title": "Software Test Engineer IV",
    "address": "44 Hovde Street"
  }, {
    "first_name": "Carmelia",
    "last_name": "Kiernan",
    "gender": "Female",
    "email": "ckiernan1@cocolog-nifty.com",
    "phone_number": "+51-540-239-8403",
    "avatar": "https://robohash.org/autemetquasi.png?size=400x300&set=set1",
    "job_title": "Recruiter",
    "address": "662 Service Point"
  }, {
    "first_name": "Bearnard",
    "last_name": "Pinnocke",
    "gender": "Male",
    "email": "bpinnocke2@feedburner.com",
    "phone_number": "+53-357-728-0250",
    "avatar": "https://robohash.org/nonveritatisin.png?size=400x300&set=set1",
    "job_title": "Assistant Professor",
    "address": "81 Eastlawn Crossing"
  }, {
    "first_name": "Cort",
    "last_name": "Benitez",
    "gender": "Male",
    "email": "cbenitez3@arizona.edu",
    "phone_number": "+387-103-446-7860",
    "avatar": "https://robohash.org/remmagnimaiores.png?size=400x300&set=set1",
    "job_title": "Design Engineer",
    "address": "71 Meadow Valley Lane"
  }, {
    "first_name": "Norine",
    "last_name": "Meece",
    "gender": "Female",
    "email": "nmeece4@plala.or.jp",
    "phone_number": "+507-338-484-7459",
    "avatar": "https://robohash.org/dignissimosestsit.png?size=400x300&set=set1",
    "job_title": "Payment Adjustment Coordinator",
    "address": "1974 Dwight Park"
  }, {
    "first_name": "Napoleon",
    "last_name": "Johnes",
    "gender": "Male",
    "email": "njohnes5@sphinn.com",
    "phone_number": "+420-126-898-2742",
    "avatar": "https://robohash.org/pariaturimpeditautem.png?size=400x300&set=set1",
    "job_title": "GIS Technical Architect",
    "address": "9810 Bobwhite Park"
  }, {
    "first_name": "Derril",
    "last_name": "Margrie",
    "gender": "Male",
    "email": "dmargrie6@bigcartel.com",
    "phone_number": "+62-498-682-5772",
    "avatar": "https://robohash.org/verolaboriosamvoluptatem.png?size=400x300&set=set1",
    "job_title": "Senior Developer",
    "address": "85589 Becker Way"
  }, {
    "first_name": "Humfrid",
    "last_name": "Gavahan",
    "gender": "Male",
    "email": "hgavahan7@state.gov",
    "phone_number": "+48-850-214-3930",
    "avatar": "https://robohash.org/dolornihilcorporis.png?size=400x300&set=set1",
    "job_title": "Nurse",
    "address": "57697 Nobel Street"
  }, {
    "first_name": "Mommy",
    "last_name": "Skitral",
    "gender": "Female",
    "email": "mskitral8@wordpress.com",
    "phone_number": "+86-684-715-4669",
    "avatar": "https://robohash.org/molestiasrecusandaedoloremque.png?size=400x300&set=set1",
    "job_title": "Editor",
    "address": "905 Warrior Court"
  }, {
    "first_name": "Rosaline",
    "last_name": "Dorro",
    "gender": "Female",
    "email": "rdorro9@github.com",
    "phone_number": "+1-945-562-5797",
    "avatar": "https://robohash.org/commodidoloremqueexcepturi.png?size=400x300&set=set1",
    "job_title": "Software Test Engineer IV",
    "address": "72 Nobel Terrace"
  }, {
    "first_name": "Jaye",
    "last_name": "Mehmet",
    "gender": "Male",
    "email": "jmehmeta@businessweek.com",
    "phone_number": "+30-298-500-7917",
    "avatar": "https://robohash.org/suntsitquas.png?size=400x300&set=set1",
    "job_title": "Sales Representative",
    "address": "23 Summit Street"
  }, {
    "first_name": "Tadeo",
    "last_name": "Riddington",
    "gender": "Male",
    "email": "triddingtonb@google.cn",
    "phone_number": "+670-999-816-6347",
    "avatar": "https://robohash.org/voluptatevoluptaslaborum.png?size=400x300&set=set1",
    "job_title": "Office Assistant II",
    "address": "95471 Village Trail"
  }, {
    "first_name": "Aurora",
    "last_name": "Nusche",
    "gender": "Female",
    "email": "anuschec@reverbnation.com",
    "phone_number": "+359-198-131-1856",
    "avatar": "https://robohash.org/blanditiissaepenulla.png?size=400x300&set=set1",
    "job_title": "Community Outreach Specialist",
    "address": "9 Spohn Circle"
  }, {
    "first_name": "Ameline",
    "last_name": "Shambroke",
    "gender": "Female",
    "email": "ashambroked@weibo.com",
    "phone_number": "+63-883-349-7955",
    "avatar": "https://robohash.org/essesitaut.png?size=400x300&set=set1",
    "job_title": "Nuclear Power Engineer",
    "address": "84781 Menomonie Avenue"
  }, {
    "first_name": "Hube",
    "last_name": "Bolzmann",
    "gender": "Male",
    "email": "hbolzmanne@ifeng.com",
    "phone_number": "+54-233-935-6196",
    "avatar": "https://robohash.org/earummolestiaeaut.png?size=400x300&set=set1",
    "job_title": "Actuary",
    "address": "06858 Northwestern Court"
  }]

  

$(document).ready(function () {
  let output
  for (let i = 0; i < data.length; i++) {

    output = `<div class="card">
    <div class="overlay"></div>
    <h5>${data[i].first_name}</h5>
    <h3>${data[i].last_name}</h3>
    <div class="indc-container"><div class="indc"></div><p>${data[i].gender}, ${data[i].job_title}</p></div>
    <div class="email-container"><i class="fa fa-envelope" aria-hidden="true"></i><p>${data[i].email}</p></div>
    <div class="phone-container"><i class="fa fa-phone" aria-hidden="true"></i><p>${data[i].phone_number}</p></div>
    <div class="address-bar"><span><i class="fa fa-map-marker" aria-hidden="true"></i> <p>${data[i].address}</p></span> </div>
    </div>`;
    $("#contacts").append(output);
    $(".card").css("background-image", "url(" + data[i].avatar + ")");
  }
})