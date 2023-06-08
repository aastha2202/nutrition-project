import { Grid, Typography, Box,Stack, IconButton, Container,Button,Chip, } from '@mui/material';
import * as React from 'react';
import  { forwardRef, useImperativeHandle } from "react";
import {useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Backbutton from "../../assets/Backbutton.svg";
import Page from 'src/components/Page';
import Userfig from "../../assets/Userfig.svg";
import Iconify from 'src/components/iconify/Iconify';
import { Link } from 'react-router-dom';
import Searchbar from 'src/layouts/dashboard/Searchbar';
import {Pagination} from '@mui/material';
import axios from 'axios';





const pageheading={
    fontFamily:"Inter-Bold",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "30px",
    color: "#112866"
  };
  const chips={
    fontFamily:"Inter-Regular",
    fontWeight: "bold",
  }
 const Adminuserlist=forwardRef((props, ref) =>{
    const location = useLocation();
    const [data,setData] = useState(location.state?.data);
    const [loading, setLoading] = useState(false)
    const [searchTitle, setSearchTitle] = useState("");
    const [usersData,setUsersData]=useState([]);
    const [usersDataOrginal,setUsersDataOrginal]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    const [totalCountOfUser,setTotalCountOfUsers]=useState(0);
    const [totalCountOfActiveUser,setTotalCountOfactiveUsers]=useState(0);
    const [totalCountOfInActiveUser,setTotalCountOfInActiveUsers]=useState(0);
    const [status,setStatus]=useState(data);
    const [displayUser,setDisplayUser]=useState('Total Users');
    const [displayNumber,setDisplayNumber]=useState('0');
    const [selectedUsers,setSelectedUsers]=useState('0');

    const changeName = (i)=>{
      const str2 = i.charAt(0).toUpperCase() + i.slice(1);
      // console.log(str2,'---upper case')
      return str2
      
      }

    var userStatus='all'
    //pagination
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };


    useImperativeHandle(ref, () => ({
      log() {
        console.log("child function");
      }
    }));

 
  
  
    useEffect(()=>{
      if(typeof (str) ==='undefined') {
        console.log('from back');
      }
      
      
       apiHit()
    },[currentPage,searchTitle]);


    useEffect(()=>{
      console.log("status is", status)
      console.log("usersdata is",usersData);

      apiHit();
      setCurrentPage(1)
      console.log(currentPage,'currentpage')
      if(usersData)
      sortBasedOnStatus();
      //filterItems(userStatus)
},[status]);
useEffect(()=>{
  console.log(selectedUsers,'inside use effect for users and pages')
  const temp=Math.ceil(selectedUsers/10);
  setTotalPages(temp)
console.log("inside use effect for users and pages",totalCountOfUser,totalPages,temp)
 },[totalPages])

useEffect(()=>{
  //console.log(selectedUsers,'inside use effect for users and pages')
  const temp=Math.ceil(selectedUsers/10);
  setTotalPages(temp)
//console.log("inside use effect for users and pages",totalCountOfUser,totalPages,temp)
 },[selectedUsers])


    const filterItems = (status) => {
      var arr;
  if (status === "all") {
    arr= usersDataOrginal.filter(item =>
      item.user_name.toLowerCase().includes(searchTitle.toLowerCase())
    );
  } else {
    arr= items.filter(item =>
      item.status === userStatus && item.user_name.toLowerCase().includes(searchTitle.toLowerCase())
    );
  }

  console.log(arr,'from searcg filter',searchTitle,status)

  setUsersData(arr);
};

// const filteredItems = filterItems(currentStatus);
const selectedProfileCalled=(e)=>{
  console.log(e.target.value,'----selectedprofile');
}



    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...usersData];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.user_name.toLowerCase().includes(query);
        });
        // Trigger render with updated values
        setUsersData(updatedList);
       
      };
      const [pageNumber,setPageNumber]=useState(1);
      const [numberOfRecords,setNumberOfRecords]=useState(6);
      //https://aipse.in/api/searchUser?name=&page=1&count=100
      //`https://aipse.in/api/searchUser?name=${searchTitle}&page=${page}&count=6`,

    const apiHit=async()=>{
        
        console.log(`https://aipse.in/api/searchUser?name=${searchTitle}&page=${currentPage}&count=10`,);
       let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url:`https://aipse.in/api/searchUser?name=${searchTitle}&page=${currentPage}&count=10&status=${status}`,
            headers: {'Content-Type': 'application/json' }
          };
          
        axios(config)
          .then((response) => {
            // console.log(response)
            // setUsersData(response.data.data)
            setTotalCountOfUsers(response.data.totalCountOfUser)
            console.log(response.data.totalCountOfUser,'totalcountofusersintiall')
            setTotalCountOfactiveUsers(response.data.totalCountOfActiveUser)
            setTotalCountOfInActiveUsers(response.data.totalCountOfInactiveUser);
            setDisplayNumber(response.data.totalCountOfUser);
            
            console.log(response.data)
            sortBasedOnStatus(response.data.data);
            setUsersDataOrginal(response.data.data);
            //setUsersData(response.data.data);

              var arr;
              if (status === "all" || typeof (status) ==='undefined') {
                setSelectedUsers(response.data.totalCountOfUser);
                console.log(response.data.data,'lennnnnn');

                setDisplayNumber(response.data.totalCountOfUser);
                arr= response.data.data.filter(item =>
                  item.user_name.toLowerCase().includes(searchTitle.toLowerCase())
                );
              } else {
                // const temp=await response.data.totalCountOfActiveUser;
                setSelectedUsers(status==='active'?response.data.totalCountOfActiveUser : response.data.totalCountOfInactiveUser)
                //setSelectedUsers(temp);
                console.log(selectedUsers,'selectedUsers');
                setDisplayNumber(status==='active'?response.data.totalCountOfActiveUser : response.data.totalCountOfInactiveUser);
                arr= response.data.data.filter(item =>
                  item.status === status && item.user_name.toLowerCase().includes(searchTitle.toLowerCase())
                );
              }

                console.log(arr,'from searcg filter',searchTitle,status)

                setUsersData(arr);

               
                
           
          })
          .catch((error) => {
            console.log(error);
          });
    }

     function searchHandler(str){
        // console.log(searchTitle,'------searchTitle-----');
        setSearchTitle(str);
        setCurrentPage(1);
    }
    function pageChangeHandler(event, pageNumber = 1){
        console.log(pageNumber,'pagination')
        setCurrentPage(pageNumber);


    }
    function sortBasedOnStatus(){

      
     // var arr;
      if(status==='all'){
        //arr=dataArr;
        setUsersData(usersDataOrginal);
        setDisplayUser('Total Users');
        setDisplayNumber(totalCountOfUser);
        
      }
      else if(status==='active'){

      let usersDataFiltered=usersDataOrginal.filter(item=>{
        return  item.status===status;
      })
      setUsersData(usersDataFiltered);
      console.log(usersData,"after filter")
        setDisplayUser('Active Users');
        setDisplayNumber(totalCountOfActiveUser);
    }
    else{
      let usersDataFiltered=usersDataOrginal.filter(item=>{
        return  item.status===status;
      })
      setUsersData(usersDataFiltered);
      console.log(usersData,"after filter");
        setDisplayUser('In Active Users');
        setDisplayNumber(totalCountOfInActiveUser);
    }
        //console.log(arr,'-----sortBasedOnStatus')
        //setUsersData(arr);

        if(status==='all'){
          
          setTotalPages(Math.ceil(totalCountOfUser/10));
          setTotalPages(Math.ceil(totalCountOfUser/10));
        }
        else if(status==='active'){
          
          setTotalPages(Math.ceil(totalCountOfActiveUser/10));
        }
        else if(status==='inactive'){
          
          setTotalPages(Math.ceil(totalCountOfInActiveUser/10));
        }
        //console.log(totalPages,'totalCountOfUser');
    }
    const handleClickActiveInactive=async (item)=>{
        console.log("item => ", item);
        await setStatus(item);
        console.log("status is =>",status);
        sortBasedOnStatus();
       // userStatus=item
        //console.log(status,`----${item} users`)
        
    }
    
    return (
        
            <Page  title="Dashboard: Admin">

            <Searchbar  searchHandler={searchHandler} id="search-bar" sx={{height:"100px"}}/>
            

            <Container>
             
             <Grid container flexDirection="row">
                <Grid   >
                <Link to="/dashboardadmin/adminuser">
      <IconButton>
        <Iconify icon="material-symbols:arrow-back-rounded" />
      </IconButton></Link>

                </Grid>
               
                <Grid>
                <Typography style={pageheading}>Users Sheema</Typography>
                </Grid>
                
            
                    
                        
                        
             
             </Grid>
             
             <Grid container flexDirection='row' alignItems='center' justifyContent='space-between'>
                <Stack  direction="row" spacing={1}  marginLeft={"20px"} marginTop={"20px"}>
                
                 <Chip label="All Users " value='All Users' 
                  sx={chips} 
                 style={{
                  backgroundColor: status==='all' ? 'purple' : '',
                  color: status==='all'? 'white' : '',
                }} 
                onClick={()=>setStatus('all')}
                 />
                  <Chip label="Active " value='Active' sx={chips}  style={{
                  backgroundColor: status==='active' ? 'purple' : '',
                  color: status==='active'? 'white' : '',
                }}  onClick={()=>setStatus('active')}  />
                  <Chip label="Inactive" value='Inactive' sx={chips} 
                  
                  style={{
                    backgroundColor: status==='inactive' ? 'purple' : '',
                    color: status==='inactive'? 'white' : '',
                  }}
                  
                  onClick={()=>setStatus('inactive')}   />
                  </Stack>
                  <Typography variant="h6" component="h2">{displayUser} : {displayNumber}</Typography>
            

             </Grid>
              

             <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            

             <Box sx={{ width: '100%' }}>  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >

                    {/* {console.log(usersData.length,'usersData.length')} */}

                    { 
                      
                      
                        usersData?.filter((value) => {
                            if (searchTitle === "") {
                                // console.log(searchTitle,'-----------searchTitle---------');
                              return value;
                            } else if (
                              value.user_name.toLowerCase().includes(searchTitle.toLowerCase())
                            ) {
                                // console.log(value,'-----------value---------');
                              return value;
                            }
                          })
                        
                        
                        ?.map(item=>{
                          
                            return(

                           
                            <Card sx={{ minWidth: 275 }} style={{margin:"20px"}} key={item.id}>
                                    <CardContent>
                                    <Grid container onClick={selectedProfileCalled} flexDirection="row" to="/dashboardadmin/adminprofile" state={{ data: item }} component={RouterLink} sx={{textDecoration:'none'}} >
                                        
                                        <div>
                                        <img src={Userfig} alt="diet logo" style={{height: "auto",borderRadius:"40px", width: "auto"}}/>
                                        </div>
                                        <div>
                                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>{changeName(item.user_name)}</span>
                                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} >
                                        {item.user_name}
                                        </Typography>
                                        </div>
                                    
                                      {/* {  console.log(searchTitle,'--------Admin Search------')} */}

                                        
                                        
      
                                        
                                        </Grid>
                                    </CardContent>
                                </Card> 
                           
                            );
                           
                        })
                      }
                    
       
            </Box>

    </Box> </Stack>


            </Container>

           
          <Box py={3} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            color="secondary"
            variant="outlined"
            onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)}
          />

        </Box>
        {/* <Box py={3} display="flex" justifyContent="center">
        <div>
          <Pagination count={3}>
        {Array.from({ length: 4 }, (_, index) => index + 1).map((page) => (
          <Button key={page} onClick={() => handlePageChange(page)} variant={currentPage === page ? 'contained' : 'outlined'}>{page}</Button>
        ))}
        </Pagination>
      </div>

        </Box> */}
        
            </Page>
            

    


    );
      })

export default Adminuserlist