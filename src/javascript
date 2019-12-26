    def TimecodeConvertor(data):
        frameMultiplier = 0
        dropFrame = False
        rejected = data[0]
        if rejected == "23.98":
            frameMultiplier = 24
            dropFrame = False
        elif rejected == "24":
            frameMultiplier = 24
            dropFrame = False
        elif rejected == "PAL":
            frameMultiplier = 25
            dropFrame = False
        elif rejected == "NDF":
            frameMultiplier = 30
            dropFrame = False
        elif rejected == "DF":
            frameMultiplier = 30
            dropFrame = True
        timecode = data[1]
        timecode_split = timecode.replace(".", ":").split(":")
        Hours = int(timecode_split[0])
        Minutes = int(timecode_split[1])
        Seconds = int(timecode_split[2])
        Frames = int(timecode_split[3])
        if dropFrame == False:
            TC_inFrames = 0
            TC_inFrames += ((Hours * 60 * 60) + (Minutes * 60) + Seconds) * frameMultiplier + Frames
        if dropFrame == True:
            DF_Minutes = Hours * 60 + Minutes
            if DF_Minutes >= 10:
                DF_Modulo = DF_Minutes % 10
                DF_10_chunk = (DF_Minutes - DF_Modulo) / 10
                TC_adjuster = Minutes * ((DF_10_chunk * 18) + (DF_Modulo * 2))
            elif DF_Minutes <= 9:
                TC_adjuster = Minutes * 2
            TC_inFrames = 0
            TC_inFrames += ((Hours * 60 * 60) + (Minutes * 60) + Seconds) * frameMultiplier + Frames - TC_adjuster
        ASM_inFrames = TC_inFrames + (100 * frameMultiplier)
        ASMFrames = ASM_inFrames % frameMultiplier
        ASMSeconds = ((ASM_inFrames - ASMFrames)/frameMultiplier) % 60
        ASMMinutes = ((((ASM_inFrames - ASMFrames)/frameMultiplier) - ASMSeconds) / 60 ) % 60
        ASMHour = ((((((ASM_inFrames - ASMFrames)/frameMultiplier) - ASMSeconds) / 60 ) - ASMMinutes) / 60)
        cleaned_AHour = "{:0>2}".format(int(ASMHour))
        cleaned_AMinute = "{:0>2}".format(int(ASMMinutes))
        cleaned_ASecond = "{:0>2}".format(int(ASMSeconds))
        cleaned_AFrame = "{:0>2}".format(int(ASMFrames))
        print (cleaned_AHour + ":" + cleaned_AMinute + ":" + cleaned_ASecond + "." + cleaned_AFrame)