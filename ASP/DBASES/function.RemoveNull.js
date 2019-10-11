Public function RemoveNull(Obj, Value)
    if IsNull(Obj) then
       RemoveNull = Value
    else
       RemoveNull = Obj
    end if
end Function