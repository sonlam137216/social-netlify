import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ChatAPI from '../../api/ChatApi';

export const getAllConversations = createAsyncThunk('conversation/getAll', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.getAllConversations();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const createConversation = createAsyncThunk('conversation/create', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.createConversation(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const getUserContact = createAsyncThunk('user/getContact', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.getUserContact();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const createMessage = createAsyncThunk('message/create', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.createMessage(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const getMessageInCons = createAsyncThunk('message/get', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.getMessageInCon(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const getMembersInCon = createAsyncThunk('members/get', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.getMembersInCon(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const deleteCon = createAsyncThunk('conversation/delete', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.deleteCon(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const removeUserInCon = createAsyncThunk('conversation/removeUser', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.removeUserInCon(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const addUserInCon = createAsyncThunk('conversation/addUser', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.addUserInCon(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const tymMessage = createAsyncThunk('message/tym', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.tymMessage(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const unTymMessage = createAsyncThunk('message/tym', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.unTymMessage(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const changeConversationName = createAsyncThunk('conversation/changeName', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.changeConName(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

export const changeConversationAvatar = createAsyncThunk('conversation/changeAvatar', async (args, thunkAPI) => {
    try {
        const response = await ChatAPI.changeConAvt(args);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(`${error}`);
    }
});

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        conversations: [],
        loading: false,
        error: false,
        userFollowing: [],
        tags: [],
    },
    reducers: {
        createTag: (state, action) => {
            state.tags.push(action.payload);
        },
        deleteTag: (state, action) => {
            state.tags = state.tags.filter((tag) => {
                if (tag._id !== action.payload) {
                    return tag;
                }
                return;
            });
        },
        resetTag: (state, action) => {
            state.tags = [];
        },
    },
    extraReducers: {
        [getAllConversations.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [getAllConversations.fulfilled]: (state, action) => {
            state.loading = false;
            state.conversations = action.payload.conversation;
            state.error = false;
        },
        [getAllConversations.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [createConversation.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [createConversation.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
            state.conversations.unshift(action.payload.conversation);
        },
        [createConversation.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [getUserContact.pending]: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        [getUserContact.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
            state.userFollowing = action.payload.contactUsers;
        },
        [getUserContact.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [createMessage.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [createMessage.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        [createMessage.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [getMessageInCons.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [getMessageInCons.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
        },
         [getMessageInCons.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [removeUserInCon.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [removeUserInCon.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
            state.conversations = state.conversations.filter(
                (conversation) => conversation._id !== action.payload.newConversation._id
            );
        },
        [removeUserInCon.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [deleteCon.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [deleteCon.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
            state.conversations = state.conversations.filter(
                (conversation) => conversation._id !== action.payload.conversation._id
            );
        },
        [deleteCon.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [tymMessage.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [tymMessage.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        [tymMessage.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [unTymMessage.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [unTymMessage.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        [unTymMessage.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [changeConversationName.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [changeConversationName.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
            const conIndex = state.conversations.findIndex(conversation => conversation._id == action.payload.newConversation._id)
            state.conversations[conIndex].name = action.payload.newConversation.name
        },
        [changeConversationName.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [changeConversationAvatar.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [changeConversationAvatar.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
            const conIndex = state.conversations.findIndex(conversation => conversation._id == action.payload.newConversation._id)
            state.conversations[conIndex].avatar = action.payload.newConversation.avatar
        },
        [changeConversationAvatar.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export default chatSlice;
export const { createTag, deleteTag, resetTag } = chatSlice.actions;
