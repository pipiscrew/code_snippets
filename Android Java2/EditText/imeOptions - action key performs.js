//http://developer.android.com/reference/android/widget/TextView.html

    <EditText
        android:id="@+id/txt_description"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:imeOptions="actionDone"
        android:inputType="text" />
        
actionUnspecified	0x00000000	 There is no specific action associated with this editor, let the editor come up with its own if it can. Corresponds to IME_NULL.
actionNone	0x00000001	 This editor has no action associated with it. Corresponds to IME_ACTION_NONE.
actionGo	0x00000002	 The action key performs a "go" operation to take the user to the target of the text they typed. Typically used, for example, when entering a URL. Corresponds to IME_ACTION_GO.
actionSearch	0x00000003	 The action key performs a "search" operation, taking the user to the results of searching for the text the have typed (in whatever context is appropriate). Corresponds to IME_ACTION_SEARCH.
actionSend	0x00000004	 The action key performs a "send" operation, delivering the text to its target. This is typically used when composing a message. Corresponds to IME_ACTION_SEND.
actionNext	0x00000005	 The action key performs a "next" operation, taking the user to the next field that will accept text. Corresponds to IME_ACTION_NEXT.
actionDone	0x00000006	 The action key performs a "done" operation, closing the soft input method. Corresponds to IME_ACTION_DONE.
actionPrevious	0x00000007	 The action key performs a "previous" operation, taking the user to the previous field that will accept text. Corresponds to IME_ACTION_PREVIOUS.