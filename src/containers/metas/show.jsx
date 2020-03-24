import React from "react";
import { Card, CardHeader, List, BlockTitle, ListItem, Fab, Icon,Preloader, Block} from 'framework7-react';
import { dict} from '../../Dict';
import ActualForm from "../actuals/form";
import ActualList from "../actuals/list";
import JSONPretty from 'react-json-pretty';

const MetaShow = (props) => {
  if (props.meta){
    return(
      <React.Fragment>
        <Card>
        <CardHeader>{dict.title}: {props.meta.title}</CardHeader>
        <List simple-list>
          <ListItem className=''>
          <JSONPretty id="json-pretty" data={JSON.stringify(props.meta.meta_schema)}></JSONPretty></ListItem>
        </List>
        </Card>
        <ActualList meta={props.meta} editable={true} actuals={props.meta.actuals} removeActual={props.removeActual} />
        <ActualForm meta={props.meta} submit={props.submit} onChangeValue={props.handleChangeValue} />
      </React.Fragment>
    )
  } else {
    return(null)
  }
}
export default MetaShow;
