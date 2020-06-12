import React, { Fragment, useEffect, useState } from 'react';
import CategoriesService from '../../../services/categories';
import { Columns, Image, Section } from 'react-bulma-components';

const Categories = (props) => {
  const [categories, setCategories] = useState([])

  async function fetchCategories() {
    const response = await CategoriesService.index()
    setCategories(response.data['categories'])
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const categories_list = categories.map((category, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Image src={category.image_url} onClick={() => props.fetchCategorySearch(category.id)}></Image>
    </Columns.Column>
  )

  return (
    <Fragment>

    </Fragment>
  )
}
export default Categories