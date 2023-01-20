import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`

`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <div style={{padding: "10px",}}></div>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Productos:</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Talla
            </Option>
            <Option>20</Option>
            <Option>21</Option>
            <Option>22</Option>
            <Option>23</Option>
            <Option>24</Option>
            <Option>25</Option>
            <Option>26</Option>
            <Option>27</Option>
            <Option>28</Option>
            <Option>29</Option>
            <Option>30</Option>
            <Option>31</Option>
          </Select>        
        </Filter>
        <Filter>
          <FilterText>Ordenar Productos</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Nuevo</Option>
              <Option value="asc">Precio (asc)</Option>
              <Option value="desc">Precio (desc)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList