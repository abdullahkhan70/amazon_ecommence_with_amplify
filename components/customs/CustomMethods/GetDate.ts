import moment from "moment"

export const GetDate = () => {
    return moment(new Date().toISOString()).format("dddd, MMMM D")
}