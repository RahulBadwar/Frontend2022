import AdminNavigation from "../Componets/AdminNavigation";

const AdminHome=(props)=>{

    return (
        <div>
        <AdminNavigation/>
        <div>
       <div style={{background:"rgb(166,219,223)"}}>
        <div className="container">
        <div class="row pt-5 pb-5">
            <div class="col-sm" style={{}}>
              
            </div>
            <div class="col-sm"></div>
            <div class="col-sm"></div>
          </div>
          <div class="row pt-5">
            <div class="col-sm"></div>
            <div class="col-sm" style={{}}>
              <h3>Home Screen</h3>
            </div>
            <div class="col-sm"></div>
          </div>
          <div class="row pt-5 pb-5">
            <div class="col-sm" style={{}}>
              <h1>WELCOME TO</h1> <h1>Admin PAGE</h1>
            </div>
            <div class="col-sm"></div>
            <div class="col-sm">
              <h4>NAME-{}</h4></div>
          </div>
          <div class="row pt-5 pb-5">
            <div class="col-sm" style={{}}>
              
            </div>
            <div class="col-sm"></div>
            <div class="col-sm"></div>
          </div>
        </div>
      </div>
      </div>
      </div>
        
      );
}

export default AdminHome;