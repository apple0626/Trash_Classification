import numpy as np
import cv2
from tkinter import*
import threading

# Video source - can be camera index number given by 'ls /dev/video*
# or can be a video file, e.g. '~/Video.avi'
cap = cv2.VideoCapture(0 , cv2.CAP_DSHOW)
cap.set(3,640)
cap.set(4,480)







def button_click(low, high):
    
    for i in range(low, high):
        window=Tk()

        def callback():

            cv2.imwrite('self camera test.jpg', frame)
            c1["text"]='clicked'
            
        #checkvar1=IntVar()
        c1=Button(window, text="cap", command=callback)
        c1.pack()

        window.mainloop()   

t=threading.Thread(target= button_click, args=(1,100000))
t.start()


while(True):
    # Capture frame-by-frame
    
    ret, frame = cap.read()
    # Display the resulting frame
    cv2.imshow('frame', frame)
    



    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()
