import React from 'react';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { green } from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles, Theme } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon
};

const useStyles1 = makeStyles((theme: Theme) => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export interface Props {
  className?: string;
  message?: string;
  onClose?: () => void;
  variant: keyof typeof variantIcon;
}

function MySnackbarContentWrapper(props: Props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon
            className={clsx('custom-icon', classes.icon, classes.iconVariant)}
          />
          {message}
        </span>
      }
      {...other}
    />
  );
}

export default function CustomizedSnackbars(props: any) {
  const open = Boolean(props.message);
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
    >
      {props.error ? (
        <MySnackbarContentWrapper variant="error" message={props.message} />
      ) : (
        <MySnackbarContentWrapper variant="success" message={props.message} />
      )}
    </Snackbar>
  );
}
