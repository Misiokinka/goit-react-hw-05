import { Formik, Form, Field } from "formik";

import css from "./SearchForm.module.css"

const SearchForm = (props) => {
    const { searchQuery, onSetSearchQuery } = props
    return (
        <Formik initialValues={{ query: searchQuery ?? "" }}
            onSubmit={(values) => {
                onSetSearchQuery(values.query);
                

            }}>

            <Form className={css.formMovie}>
                <label><Field className={css.fieldMovie} type="text" name="query" placeholder="Search movie" /></label>
                <button className={css.buttonMovie} type="submit">Search</button>
            </Form>

        </Formik>
    )
}

export default SearchForm