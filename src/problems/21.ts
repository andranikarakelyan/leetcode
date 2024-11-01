function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let c1=list1, c2=list2;
    let c: ListNode, head: ListNode;

    while(c1 || c2) {
        let nextNode: ListNode;
        if( ( c1 && c2 && c1.val<c2.val ) || !c2 ) { nextNode=c1; c1=c1.next; }
        else { nextNode=c2; c2=c2.next; }

        if(!head || !c) head=c=nextNode;
        else c=c.next=nextNode;
    }

    return head || null;
}