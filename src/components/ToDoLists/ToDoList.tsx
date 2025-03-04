import {
    Delete as DeleteIcon,
    Edit as EditIcon,
    Save as SaveIcon
} from '@mui/icons-material';
import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    TextField
} from '@mui/material';
import { FC, useState } from 'react';

type ToDoListProps = {
    initialItems: string[];
};

export const ToDoList: FC<ToDoListProps> = ({ initialItems }) => {
    const [items, setItems] = useState(initialItems);
    const [newItem, setNewItem] = useState('');
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editItem, setEditItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem.trim()]);
            setNewItem('');
        }
    };

    const handleEditItem = (index: number) => {
        setEditIndex(index);
        setEditItem(items[index]);
    };

    const handleSaveEdit = () => {
        if (editItem.trim() && editIndex !== null) {
            const updatedItems = [...items];
            updatedItems[editIndex] = editItem.trim();
            setItems(updatedItems);
            setEditIndex(null);
            setEditItem('');
        }
    };

    const handleRemoveItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <h3>To-Do List</h3>
            <List>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        {editIndex === index ? (
                            <TextField
                                value={editItem}
                                onChange={(e) => setEditItem(e.target.value)}
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                        ) : (
                            <ListItemText primary={item} />
                        )}
                        <ListItemSecondaryAction>
                            {editIndex === index ? (
                                <IconButton
                                    edge="end"
                                    aria-label="save"
                                    onClick={handleSaveEdit}
                                >
                                    <SaveIcon />
                                </IconButton>
                            ) : (
                                <IconButton
                                    edge="end"
                                    aria-label="edit"
                                    onClick={() => handleEditItem(index)}
                                >
                                    <EditIcon />
                                </IconButton>
                            )}
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleRemoveItem(index)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', mt: 2 }}>
                <TextField
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    variant="outlined"
                    size="small"
                    placeholder="Add new item"
                    fullWidth
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddItem}
                    sx={{ ml: 2 }}
                >
                    Add
                </Button>
            </Box>
        </Box>
    );
};
