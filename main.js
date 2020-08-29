const overview = {
    Job: "Former Senior Data Entry Operator at Valtex International BD Ltd.",
    Study: "Studies Computer Science & Engineering (CSE) at National Institute of Technology",
    HomeCity: "Lives in Chittagong",
    City: "From Chittagong",
    Relation: "Its Complecated"
}
const myProperties = Object.values(overview)
const myPropertiesKey = Object.keys(overview)

const education = {
    Work: "Former Senior Data Entry Operator at Valtex International BD Ltd.",
    University: "Studies Computer Science & Engineering (CSE) at National Institute of Technology",
    HighSchool: "Madrasha"
}
const myEducation = Object.values(education)
const myEducationKey = Object.keys(education)
const placeLived = {
    CurrentCity: "Chittagong",
    HomeTown: "Satkania",
    TourCity: "Gazipur"
}
const myLocation = Object.values(placeLived)
const myLocationKey = Object.keys(placeLived)
const contactBasicInfo = {
    Mobile: "01830134593",
    Email: "ariful.og@gmail.com",
    Website: "ads-222.com",
    Male: "Gender",
    Born: "25 August 1997",
    Language: "English, Bangla, Hindi"
}
const basicInfo = Object.values(contactBasicInfo)
const mybasicInfoKey = Object.keys(contactBasicInfo)
const family = {
    Relationship: "In a relationship",
    FamilyMember: "Mdh Shumon"
}
const familyRelation = Object.values(family)
const myfamilyRelationKey = Object.keys(family)
const detailsAboutMe = {
    Name: "Ariful Islam",
    NickName: "Arif",
    FavQuotes: "Yellow",
    BloodDonation: "A+"
}
const myBio = Object.values(detailsAboutMe);
const myBioKey = Object.keys(detailsAboutMe)
const lifeEvent = {
    StartStudy: "Start studying at National Institute of Technology",
    LeftJob: "Left Job at Valtex International Bd Limited",
    StartJob: "Started New Job at Valtext Internatioal BD Limited"
}
const myLifeEvent = Object.values(lifeEvent);
const myLifeEventKey = Object.keys(lifeEvent)

overviewFunction("overview",myProperties,myPropertiesKey)
overviewFunction("education", myEducation,myEducationKey)
overviewFunction("home", myLocation,myLocationKey)
overviewFunction("contact", basicInfo,mybasicInfoKey)
overviewFunction("family", familyRelation,myfamilyRelationKey)
overviewFunction("bio", myBio,myBioKey)
overviewFunction("event", myLifeEvent,myLifeEventKey)

function overviewFunction(overview,properits,key){
    const overviewBtn = document.getElementById(overview)
    overviewBtn.addEventListener("click", function(){
        const myDetails = document.getElementById("details");
        myDetails.innerText = "";
        for(let i=0;i<properits.length;i++)
        {
            const li = document.createElement("li");
            const span = document.createElement("span");
            myDetails.appendChild(span)
            span.textContent = key[i]
            myDetails.appendChild(li);
            li.setAttribute("class", "list-group-item")
            li.textContent = properits[i]
        }
    })
}

