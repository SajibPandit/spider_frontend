import { Paper } from "@mui/material";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledPaper = styled(Paper)`
  width: 800px;
  max-width: 1000px !important;
  //   background:linear-gradient(to right bottom, #4e4c4c, #4e4c4c);
  color: white;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
  }
`;

export default function Page({ open, setOpen, children }) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        PaperComponent={StyledPaper}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="border-dark border-bottom bg-green text-dark d-flex align-items-center justify-content-between">
          <h5>Property Information</h5>
          <button
            className="btn btn-danger rounded-circle cross-btn"
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </button>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
