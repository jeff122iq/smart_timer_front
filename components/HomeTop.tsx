// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import {
  Button,
  Container,
  IconButton,
  InputBase,
  Paper, TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "../styles/home-top";
import Link from "next/link";
import {EditTemplates} from "../store/admin/editTemplates";
import {Autocomplete} from "@material-ui/lab";
import {toJS} from "mobx";
import {useEffect} from "react";
import {observer} from "mobx-react";
import {useRouter} from "next/router";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
function HomeTop (props:any){
  const router = useRouter();
  useEffect(() => {
    async function getData(){
      await getTemplates();
    }
    getData();
  }, [])

  const {getTemplates, getTemplate, template, currentTemplate} = EditTemplates

  // const reload = async (event) => {
  //   event.preventDefault();
  //
  // }

  useEffect(()=>{
    console.log(currentTemplate)
  }, [currentTemplate])

  const search = async (e) => {
    const id = toJS(template).filter(temp=>temp.name === e.target.value)[0]?.id
    if(id){ await getTemplate(id)
    router.push(`http://localhost:3000/template/${id}`)}
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h6" className={classes.caption}>
          Find or create brief for necessary type of work
        </Typography>
        <div className={classes.content}>
            <Autocomplete
                onSelect={search}
                className={classes.input}
                options={toJS(template)}
                style={{width: "100%"}}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Search brief template" variant={"outlined"}/>}
                />
          <Link href={'/create'}>
          <Button className={classes.button}>Create new brief</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default observer(HomeTop);

// ========================== COMPONENT ====================================
