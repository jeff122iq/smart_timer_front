import React, { FunctionComponent, useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Popover from '@material-ui/core/Popover'
import TextField from '@material-ui/core/TextField'
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'
import MovieIcon from '@material-ui/icons/Movie'
import FormatAlignCenter from '@material-ui/icons/FormatAlignCenter'
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft'
import FormatAlignRight from '@material-ui/icons/FormatAlignRight'

export type TAlignment = "left" | "center" | "right"

export type TMediaType = "image" | "video"

export type TUrlData = {
    url?: string
    width?: number
    height?: number
    alignment?: TAlignment
    type?: TMediaType
}

interface IUrlPopoverStateProps extends WithStyles<typeof styles> {
    anchor?: HTMLElement
    data?: TUrlData
    isMedia?: boolean
    onConfirm: (isMedia?: boolean, ...args: any) => void
}

const styles = ({ spacing }: Theme) => createStyles({
    linkPopover: {
        padding: spacing("10px", "10px", "4px", "10px"),
        maxWidth: 250,
        borderRadius: 0,
        "& > h3": {
            margin: 0,
            marginBottom: 20,
            fontWeight: 400,
        }
    },

    fieldContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& > i": {
            fontSize: "10px",
        }
    },

    linkTextField: {
        width: "100%",
        fontSize: "5px",
        '& input::placeholder': {
            fontSize: "10px",
        },
    },

    buttons: {
        "& > button > span > p": {
            margin: 0,
            fontSize: 10,
            background: "transparent",
            "&:hover": {
                color: "#4573f9",
                background: "transparent"
            },
        },
    },
})

const UrlPopover: FunctionComponent<IUrlPopoverStateProps> = (props) => {
    const [data, setData] = useState<TUrlData>(props.data || {
        url: undefined,
        width: undefined,
        height: undefined,
        alignment: undefined,
        type: undefined
    })

    const { classes } = props

    const onSizeChange = (value: any, prop: "width" | "height") => {
        if (value === "") {
            setData({ ...data, [prop]: undefined })
            return
        }
        const intValue = parseInt(value, 10)
        if (isNaN(intValue)) {
            return
        }
        setData({ ...data, [prop]: intValue })
    }

    return (
        <Popover
            open={props.anchor !== undefined}
            anchorEl={props.anchor}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <div className={classes.linkPopover}>
                <h3>Edit link</h3>
                <Grid container spacing={1} style={{display: "flex", flexDirection: "column"}}>
                    <Grid container item xs spacing={1}>
                        <Grid item xs={12}>
                            <div className={classes.fieldContainer}>
                                <i style={{marginRight: "10px"}} className="fas fa-align-left"/>
                                <TextField
                                    placeholder="Link name"
                                    className={classes.linkTextField}
                                    onChange={(event) => setData({...data, url: event.target.value})}
                                    defaultValue={props.data && props.data.url}
                                    autoFocus={true}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </div>
                            <div className={classes.fieldContainer}>
                            <i style={{marginRight: "10px"}} className="fas fa-globe"/>
                            <TextField
                                className={classes.linkTextField}
                                onChange={(event) => setData({...data, url: event.target.value})}
                                placeholder="Web adress"
                                defaultValue={props.data && props.data.url}
                                autoFocus={true}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            </div>
                        </Grid>
                        {props.isMedia ?
                            <>
                                <Grid item xs={12}>
                                    <ButtonGroup fullWidth>
                                        <Button 
                                            color={(!data.type || data.type === "image") ? "primary" : "default"} 
                                            size="small" 
                                            onClick={() => setData({...data, type: "image"})}
                                        >
                                            <InsertPhotoIcon />
                                        </Button>
                                        <Button 
                                            color={data.type === "video" ? "primary" : "default"} 
                                            size="small" 
                                            onClick={() => setData({...data, type: "video"})}
                                        >
                                            <MovieIcon />
                                        </Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={(event) => onSizeChange(event.target.value, "width")}
                                        value={data.width || ""}
                                        label="Width"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={(event) => onSizeChange(event.target.value, "height")}
                                        value={data.height || ""}
                                        label="Height"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <ButtonGroup fullWidth>
                                        <Button 
                                            color={data.alignment === "left" ? "primary" : "default"} 
                                            size="small" 
                                            onClick={() => setData({...data, alignment: "left"})}
                                        >
                                            <FormatAlignLeft />
                                        </Button>
                                        <Button 
                                            color={data.alignment === "center" ? "primary" : "default"} 
                                            size="small" 
                                            onClick={() => setData({...data, alignment: "center"})}
                                        >
                                            <FormatAlignCenter />
                                        </Button>
                                        <Button 
                                            color={data.alignment === "right" ? "primary" : "default"} 
                                            size="small" 
                                            onClick={() => setData({...data, alignment: "right"})}>
                                            <FormatAlignRight />
                                        </Button>
                                    </ButtonGroup>
                                </Grid>
                            </>
                            : null}
                    </Grid>
                    <footer style={{borderTop: "2px solid #ebebeb", marginTop: "20px"}}>
                    <Grid container item xs={12} direction="row" justify="flex-end">
                        <div className={classes.buttons}>
                            <Button style={{background: "transparent",}} onClick={() => props.onConfirm(props.isMedia, data.url, data.width, data.height, data.alignment, data.type)}>
                                <p>save</p>
                            </Button>
                        <Button style={{background: "transparent",}}
                            onClick={() => props.onConfirm(props.isMedia, "")}>
                            <p>close</p>
                        </Button>
                        </div>
                    </Grid>
                    </footer>
                </Grid>
            </div>
        </Popover>
    )
}

export default withStyles(styles, { withTheme: true })(UrlPopover)