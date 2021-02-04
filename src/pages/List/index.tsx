import React, {useMemo} from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './style';
import HistoryFinanceCard from '../../components/historyFinanceCard';

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

const List: React.FC<IRouteParams> =  ({ match }) => {
    const { type } = match.params
    const props = useMemo( () =>{
        return type === 'entry-balance' ? 
        {title:'Entradas',lineColor:'#F7931B'} :
        {title:'Saídas',lineColor:'#E44C4E'}
    },[type]);

    const mes = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezebro'}
    ]
    const ano = [
        {value: 2021, label: 2021},
        {value: 2020, label: 2020},
        {value: 2019, label: 2019},
        {value: 2018, label: 2018},
    ]
    return (
        <Container>
           <ContentHeader title={props.title} lineColor={props.lineColor}>
              <SelectInput options={mes}/>
               <SelectInput  options={ano}/>
           </ContentHeader>
           <Filters>
               <button 
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                  >
                   Recorrentes
                 </button>
                 <button 
                    type="button"
                    className="tag-filter tag-filter-eventual"
                  >
                   Eventuais
                 </button>
              
           </Filters>
           <Content>
            <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
            />
                    
           </Content>
       </Container>
    );
}

export default List;