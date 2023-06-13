import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook'; //для того чтобы делать запрос

const clientsAdapter = createEntityAdapter(); 

const initialState = clientsAdapter.getInitialState({
    clientsLoadingStatus: 'idle'
});

export const fetchClients = createAsyncThunk (
    'clients/fetchClients',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/clients")
    }
)

const formSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        clientsCreated: (state, action) => {
            clientsAdapter.addOne(state, action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchClients.pending, state => {
                state.clientsLoadingStatus = 'loading';
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.clientsLoadingStatus = 'idle';
                clientsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchClients.rejected, state => {
                state.clientsLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = formSlice;

export default reducer

export const {
    clientsFetching,
    clientsFetched,
    clientsFetchingError,
    clientsCreated
} = actions